import test from 'node:test';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {root} from '../backend/database.mjs';
test('production startup cannot be enabled by an environment flag',()=>{const result=spawnSync(process.execPath,['backend/server.mjs'],{cwd:root,env:{...process.env,OPO_MODE:'production'},encoding:'utf8'});assert.equal(result.status,1);assert.match(result.stderr,/Production activation is blocked/)});
test('readiness reports real implementation blockers',()=>{const result=spawnSync(process.execPath,['scripts/readiness.mjs'],{cwd:root,encoding:'utf8'});assert.equal(result.status,1);const data=JSON.parse(result.stdout);assert.equal(data.ready,false);assert.equal(data.canAcceptRealFunds,false);assert.ok(data.blockers.some(b=>b.id==='CONTRACTS'))});
