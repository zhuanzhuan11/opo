import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,rmSync,readdirSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {spawnSync} from 'node:child_process';
import {openDatabase,root,transaction} from '../backend/database.mjs';
import {Domain,id} from '../backend/domain.mjs';
test('backup CLI and isolated restore CLI preserve a funded synthetic order without modifying source',()=>{const dir=mkdtempSync(join(tmpdir(),'opo-cli-restore-')),path=join(dir,'source.db'),backups=join(dir,'backups');let db=openDatabase(path);try{const d=new Domain(db),buyer=d.register({username:'buyer',name:'Synthetic',password:'synthetic-'+id()});transaction(db,()=>d.faucet(buyer.id));d.setCart(buyer.id,{product_id:'p1',qty:1});transaction(db,()=>d.checkout(buyer.id,{points:'4.45',expected_total:890,address:{name:'TEST',phone:'TEST',address:'TEST'}}));db.close();db=null;const before=readFileSync(path);const env={...process.env,OPO_DATABASE:path,OPO_BACKUP_DIR:backups};const backed=spawnSync(process.execPath,['scripts/backup.mjs'],{cwd:root,env,encoding:'utf8'});assert.equal(backed.status,0,backed.stderr);const name=readdirSync(backups).find(n=>n.endsWith('.db'));assert.ok(name);const restored=spawnSync(process.execPath,['scripts/restore-check.mjs',join(backups,name)],{cwd:root,env,encoding:'utf8'});assert.equal(restored.status,0,restored.stderr);assert.equal(JSON.parse(restored.stdout).orders,1);assert.deepEqual(readFileSync(path),before)}finally{db?.close();rmSync(dir,{recursive:true,force:true})}});
