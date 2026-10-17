import {DatabaseSync,backup} from 'node:sqlite';
import {resolve} from 'node:path';
import {mkdirSync,chmodSync,writeFileSync,readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {root} from '../backend/database.mjs';
const source=resolve(process.env.OPO_DATABASE||resolve(root,'database/runtime/opo.db'));
const dir=resolve(process.env.OPO_BACKUP_DIR||resolve(root,'backups'));mkdirSync(dir,{recursive:true,mode:0o700});
const dest=resolve(dir,`opo-${new Date().toISOString().replaceAll(':','-')}.db`);
const db=new DatabaseSync(source,{readOnly:true});await backup(db,dest);db.close();
const check=new DatabaseSync(dest,{readOnly:true});try{if(check.prepare('PRAGMA integrity_check').get().integrity_check!=='ok'||check.prepare('PRAGMA foreign_key_check').all().length)throw Error('Backup verification failed')}finally{check.close()}
if(process.platform!=='win32')chmodSync(dest,0o600);
writeFileSync(dest+'.json',JSON.stringify({at:new Date().toISOString(),sha256:createHash('sha256').update(readFileSync(dest)).digest('hex'),scope:'SQLite consistency backup; not an on-chain reconciliation'},null,2),{mode:0o600});
console.log('Verified backup:',dest);

