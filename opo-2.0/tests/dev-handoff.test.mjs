import assert from 'node:assert/strict';
import {appendFileSync, mkdirSync, mkdtempSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync, spawnSync} from 'node:child_process';
import test from 'node:test';

const script = fileURLToPath(new URL('../scripts/dev-handoff.mjs', import.meta.url));

function git(cwd, ...args) {
  return execFileSync('git', args, {cwd, encoding: 'utf8'}).trim();
}

function createFixture() {
  const base = mkdtempSync(resolve(tmpdir(), 'opo-dev-handoff-'));
  const remote = resolve(base, 'remote.git');
  const seed = resolve(base, 'seed');
  const work = resolve(base, 'work');
  execFileSync('git', ['init', '--bare', remote]);
  mkdirSync(seed);
  git(seed, 'init', '-b', 'codex/test-handoff');
  git(seed, 'config', 'user.name', 'OPO Test');
  git(seed, 'config', 'user.email', 'opo-test@example.invalid');
  mkdirSync(resolve(seed, 'opo-2.0/docs'), {recursive: true});
  writeFileSync(resolve(seed, 'opo-2.0/package.json'), `${JSON.stringify({scripts: {check: 'node -e "process.exit(0)"'}})}\n`);
  writeFileSync(resolve(seed, 'opo-2.0/docs/当前版本交接.md'), '# 测试交接\n');
  writeFileSync(resolve(seed, 'README.md'), '# fixture\n');
  git(seed, 'add', 'README.md', 'opo-2.0/package.json', 'opo-2.0/docs/当前版本交接.md');
  git(seed, 'commit', '-m', 'initial');
  git(seed, 'remote', 'add', 'origin', remote);
  git(seed, 'push', '-u', 'origin', 'codex/test-handoff');
  execFileSync('git', ['--git-dir', remote, 'symbolic-ref', 'HEAD', 'refs/heads/codex/test-handoff']);
  execFileSync('git', ['clone', remote, work]);
  git(work, 'config', 'user.name', 'OPO Test');
  git(work, 'config', 'user.email', 'opo-test@example.invalid');
  return {remote, seed, work};
}

function advanceRemote(seed, name = 'remote.txt') {
  writeFileSync(resolve(seed, name), `${Date.now()}\n`);
  git(seed, 'add', name);
  git(seed, 'commit', '-m', `add ${name}`);
  git(seed, 'push', 'origin', 'codex/test-handoff');
}

test('begin refuses to pull when local changes exist', () => {
  const {seed, work} = createFixture();
  advanceRemote(seed);
  writeFileSync(resolve(work, 'local.txt'), 'keep me\n');
  const before = git(work, 'rev-parse', 'HEAD');

  const result = spawnSync(process.execPath, [script, 'begin'], {cwd: work, encoding: 'utf8'});

  assert.equal(result.status, 2);
  assert.match(result.stdout + result.stderr, /local changes|本地修改/i);
  assert.equal(git(work, 'rev-parse', 'HEAD'), before);
  assert.equal(git(work, 'status', '--short'), '?? local.txt');
});

test('begin fast-forwards a clean checkout from its configured upstream', () => {
  const {remote, seed, work} = createFixture();
  advanceRemote(seed, 'from-windows.txt');

  const result = spawnSync(process.execPath, [script, 'begin'], {cwd: work, encoding: 'utf8'});

  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.equal(git(work, 'rev-parse', 'HEAD'), git(remote, 'rev-parse', 'refs/heads/codex/test-handoff'));
  assert.equal(git(work, 'status', '--short'), '');
});

test('finish rejects an explicit file list that omits the handoff record', () => {
  const {work} = createFixture();
  appendFileSync(resolve(work, 'README.md'), 'changed\n');

  const result = spawnSync(process.execPath, [script, 'finish', '--message', 'docs: update', '--files', 'README.md', '--yes'], {cwd: work, encoding: 'utf8'});

  assert.equal(result.status, 2);
  assert.match(result.stdout + result.stderr, /交接|handoff/i);
  assert.equal(git(work, 'diff', '--cached', '--name-only'), '');
});

test('finish checks, commits, and pushes only the explicitly named files', () => {
  const {remote, work} = createFixture();
  const handoff = 'opo-2.0/docs/当前版本交接.md';
  appendFileSync(resolve(work, handoff), '\n本次测试更新。\n');
  writeFileSync(resolve(work, 'unrelated.txt'), 'must stay local\n');

  const result = spawnSync(process.execPath, [script, 'finish', '--message', 'docs: update handoff', '--files', handoff, '--yes'], {cwd: work, encoding: 'utf8'});

  assert.equal(result.status, 0, result.stdout + result.stderr);
  assert.equal(git(work, '-c', 'core.quotePath=false', 'show', '--format=', '--name-only', 'HEAD'), handoff);
  assert.equal(git(work, 'status', '--short'), '?? unrelated.txt');
  assert.equal(git(work, 'rev-parse', 'HEAD'), git(remote, 'rev-parse', 'refs/heads/codex/test-handoff'));
});
