import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,rmSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {DatabaseSync,backup} from 'node:sqlite';
import {openDatabase,transaction} from '../backend/database.mjs';
import {Domain,id} from '../backend/domain.mjs';
test('restart persists account balances and verified backup restores same data',async()=>{const dir=mkdtempSync(join(tmpdir(),'opo-test-')),file=join(dir,'source.db'),dest=join(dir,'backup.db');let db=openDatabase(file);try{let d=new Domain(db);const user=d.register({username:'persist',name:'Synthetic',password:'generated-'+id()});transaction(db,()=>d.faucet(user.id));await backup(db,dest);db.close();db=openDatabase(file);d=new Domain(db);assert.equal(d.user(user.id).balances.USDT,100000);const copy=new DatabaseSync(dest,{readOnly:true});try{assert.equal(copy.prepare('PRAGMA integrity_check').get().integrity_check,'ok');assert.equal(copy.prepare('SELECT COUNT(*) n FROM journal').get().n,5)}finally{copy.close()}}finally{db.close();rmSync(dir,{recursive:true,force:true})}});

