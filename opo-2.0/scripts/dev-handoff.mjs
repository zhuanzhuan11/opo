import {spawnSync} from 'node:child_process';
import {resolve, relative, sep} from 'node:path';
import {createInterface} from 'node:readline/promises';
import process from 'node:process';

const requiredNode = 'v24.18.1';
const protectedBranches = new Set(['main', 'master']);
const handoffFiles = new Set([
  'opo-2.0/PROJECT_MEMORY.md',
  'opo-2.0/docs/当前版本交接.md',
]);

function command(name, args, options = {}) {
  const result = spawnSync(name, args, {
    cwd: options.cwd,
    encoding: 'utf8',
    stdio: options.inherit ? 'inherit' : 'pipe',
  });
  if (result.error) throw result.error;
  if (options.allowFailure || result.status === 0) return result;
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  throw new Error(`${name} ${args.join(' ')} failed with exit code ${result.status}`);
}

function git(root, args, options = {}) {
  return command('git', args, {cwd: root, ...options});
}

function output(result) {
  return (result.stdout || '').trim();
}

function gitNameList(root, args) {
  const result = git(root, [...args, '-z']);
  return (result.stdout || '').split('\0').filter(Boolean);
}

function stop(message) {
  console.error(message);
  process.exit(2);
}

function repositoryContext() {
  if (process.version !== requiredNode) {
    stop(`需要 Node ${requiredNode.slice(1)}，当前为 ${process.version.slice(1)}。请先使用 fnm 切换版本。`);
  }
  const rootResult = command('git', ['rev-parse', '--show-toplevel'], {cwd: process.cwd(), allowFailure: true});
  if (rootResult.status !== 0) stop('当前目录不在 Git 仓库中。');
  const root = output(rootResult);
  const branch = output(git(root, ['branch', '--show-current']));
  if (!branch) stop('当前处于 detached HEAD，不能执行接续流程。');
  if (protectedBranches.has(branch)) stop(`禁止在受保护分支 ${branch} 上执行接续脚本。`);
  const upstreamResult = git(root, ['rev-parse', '--abbrev-ref', '--symbolic-full-name', '@{upstream}'], {allowFailure: true});
  if (upstreamResult.status !== 0) stop('当前分支没有上游分支，请先人工核对并设置 origin 上游。');
  const upstream = output(upstreamResult);
  if (upstream !== `origin/${branch}`) stop(`上游分支 ${upstream} 与当前分支 origin/${branch} 不一致。`);
  return {root, branch, upstream, app: resolve(root, 'opo-2.0')};
}

function status(root) {
  return output(git(root, ['status', '--short']));
}

function runCheck(app) {
  const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  console.log('\n运行 npm run check...');
  command(npm, ['run', 'check'], {cwd: app, inherit: true});
}

function begin(context) {
  const before = status(context.root);
  if (before) {
    console.error('检测到本地修改，已停止同步。请先处理以下文件：');
    console.error(before);
    process.exit(2);
  }
  console.log(`当前分支：${context.branch}`);
  git(context.root, ['fetch', '--prune', 'origin'], {inherit: true});
  const canFastForward = git(context.root, ['merge-base', '--is-ancestor', 'HEAD', context.upstream], {allowFailure: true}).status === 0;
  const localAhead = git(context.root, ['merge-base', '--is-ancestor', context.upstream, 'HEAD'], {allowFailure: true}).status === 0;
  if (!canFastForward && !localAhead) stop('本地与远端已经分叉，脚本不会自动合并或变基。请人工审查。');
  if (canFastForward) {
    git(context.root, ['pull', '--ff-only', '--no-rebase', 'origin', context.branch], {inherit: true});
  } else {
    console.log('本地分支领先远端，未执行拉取；请先审查本地提交。');
  }
  if (status(context.root)) stop('同步后出现未预期的本地修改，已停止。');
  runCheck(context.app);
  console.log('\n开工检查完成。模型预览：npm run preview:model');
}

function parseFinishArgs(args) {
  const files = [];
  let message = '';
  let yes = false;
  for (let index = 0; index < args.length; index += 1) {
    const value = args[index];
    if (value === '--message') {
      message = args[index + 1] || '';
      index += 1;
    } else if (value === '--files') {
      for (index += 1; index < args.length && !args[index].startsWith('--'); index += 1) files.push(args[index]);
      index -= 1;
    } else if (value === '--yes') {
      yes = true;
    } else {
      stop(`未知参数：${value}`);
    }
  }
  return {files, message, yes};
}

function normalizeFiles(root, files) {
  return [...new Set(files.map((file) => {
    const absolute = resolve(root, file);
    if (absolute === root || !absolute.startsWith(`${root}${sep}`)) stop(`文件必须位于仓库内：${file}`);
    return relative(root, absolute).split(sep).join('/');
  }))];
}

async function finish(context, args) {
  const pending = status(context.root);
  console.log('待处理文件：');
  console.log(pending || '（无）');
  const parsed = parseFinishArgs(args);
  if (!parsed.message || parsed.files.length === 0) {
    console.log('\n请先更新 PROJECT_MEMORY.md 或 docs/当前版本交接.md，再明确列出文件：');
    console.log('node scripts/dev-handoff.mjs finish --message "docs: update handoff" --files <仓库相对路径...>');
    return;
  }
  const files = normalizeFiles(context.root, parsed.files);
  if (!files.some((file) => handoffFiles.has(file))) stop('收工提交必须明确包含 PROJECT_MEMORY.md 或 docs/当前版本交接.md 作为交接记录。');
  const staged = gitNameList(context.root, ['diff', '--cached', '--name-only']);
  if (staged.length) stop(`暂存区已有文件，脚本不会混入提交：\n${staged.join('\n')}`);
  for (const file of files) {
    if (!output(git(context.root, ['status', '--short', '--', file]))) stop(`文件没有待提交变更：${file}`);
  }
  const whitespace = git(context.root, ['diff', '--check'], {allowFailure: true});
  if (whitespace.status !== 0) stop(`发现空白错误：\n${whitespace.stdout}${whitespace.stderr}`);
  runCheck(context.app);
  console.log('\n本次只会提交：');
  for (const file of files) console.log(`- ${file}`);
  if (!parsed.yes) {
    if (!process.stdin.isTTY) stop('非交互环境必须人工复核，或在确认文件清单后显式加 --yes。');
    const prompt = createInterface({input: process.stdin, output: process.stdout});
    const answer = await prompt.question('确认提交并推送当前分支？输入 yes 继续：');
    prompt.close();
    if (answer !== 'yes') stop('已取消，未暂存、提交或推送。');
  }
  git(context.root, ['add', '--', ...files], {inherit: true});
  const stagedFiles = gitNameList(context.root, ['diff', '--cached', '--name-only']);
  if (stagedFiles.length !== files.length || stagedFiles.some((file) => !files.includes(file))) {
    stop('暂存结果与明确文件清单不一致，已停止提交；请人工检查暂存区。');
  }
  git(context.root, ['diff', '--cached', '--stat'], {inherit: true});
  git(context.root, ['commit', '-m', parsed.message], {inherit: true});
  git(context.root, ['push', 'origin', `HEAD:${context.branch}`], {inherit: true});
  console.log(`\n已提交并推送 ${context.branch}，未处理其他本地修改。`);
}

const [action, ...args] = process.argv.slice(2);
if (!['begin', 'finish'].includes(action)) {
  console.log('用法：node scripts/dev-handoff.mjs begin|finish [--message <提交说明> --files <文件...> [--yes]]');
  process.exit(action ? 2 : 0);
}
const context = repositoryContext();
if (action === 'begin') begin(context);
else await finish(context, args);
