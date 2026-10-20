import {DatabaseSync,backup} from 'node:sqlite';
import {mkdtempSync,mkdirSync,rmSync,writeFileSync,createReadStream} from 'node:fs';
import {resolve,join} from 'node:path';
import {createHash,randomUUID} from 'node:crypto';
import {root} from '../backend/database.mjs';
import {encryptBackup} from '../backend/backup-crypto.mjs';
if(!process.env.OPO_BACKUP_KEY_FILE)throw Error('OPO_BACKUP_KEY_FILE is required; do not reuse the MFA key');
const source=resolve(process.env.OPO_DATABASE||resolve(root,'database/runtime/opo.db'));
const dir=resolve(process.env.OPO_BACKUP_DIR||resolve(root,'backups'));mkdirSync(dir,{recursive:true,mode:0o700});
const temporary=mkdtempSync(join(dir,'.snapshot-')),snapshot=join(temporary,'snapshot.db'),destination=join(dir,'opo-'+new Date().toISOString().replaceAll(':','-')+'-'+randomUUID()+'.opobak');let db;
try{
 db=new DatabaseSync(source,{readOnly:true});await backup(db,snapshot);db.close();db=null;
 const check=new DatabaseSync(snapshot,{readOnly:true});try{if(check.prepare('PRAGMA integrity_check').get().integrity_check!=='ok'||check.prepare('PRAGMA foreign_key_check').all().length)throw Error('SNAPSHOT_INTEGRITY_FAILED')}finally{check.close()}
 await encryptBackup(snapshot,destination,process.env.OPO_BACKUP_KEY_FILE);
 const hash=createHash('sha256');for await(const chunk of createReadStream(destination))hash.update(chunk);
 const evidence={at:new Date().toISOString(),format:'OPOBK001/AES-256-GCM',sha256:hash.digest('hex'),encryptedFile:destination,remoteCopyVerified:false};
 writeFileSync(destination+'.json',JSON.stringify(evidence,null,2),{flag:'wx',mode:0o600});console.log(JSON.stringify(evidence));
}finally{db?.close();rmSync(temporary,{recursive:true,force:true})}
