import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,rmSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {spawnSync} from 'node:child_process';
import {openDatabase,root} from '../backend/database.mjs';
import {id} from '../backend/domain.mjs';
test('local administrator setup never overwrites accounts and explicitly creates additional reviewers',()=>{const dir=mkdtempSync(join(tmpdir(),'opo-admin-')),path=join(dir,'test.db');try{const env={...process.env,OPO_DATABASE:path,OPO_ADMIN_PASSWORD:'synthetic-'+id()};const run=(name,args=[])=>spawnSync(process.execPath,['scripts/bootstrap.mjs',...args],{cwd:root,env:{...env,OPO_ADMIN_USER:name},encoding:'utf8'});assert.equal(run('owner').status,0);assert.equal(run('reviewer').status,0);let db=openDatabase(path);assert.equal(db.prepare('SELECT COUNT(*) n FROM users').get().n,1);db.close();assert.equal(run('reviewer',['--additional-admin']).status,0);assert.notEqual(run('owner',['--additional-admin']).status,0);db=openDatabase(path);assert.equal(db.prepare("SELECT COUNT(*) n FROM users WHERE role='admin'").get().n,2);db.close()}finally{rmSync(dir,{recursive:true,force:true})}});
