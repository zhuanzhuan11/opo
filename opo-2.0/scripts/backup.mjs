import {DatabaseSync,backup} from 'node:sqlite';
import {resolve} from 'node:path';
import {mkdirSync} from 'node:fs';
import {root} from '../backend/database.mjs';
const source=resolve(process.env.OPO_DATABASE||resolve(root,'database/runtime/opo.db'));
const dir=resolve(process.env.OPO_BACKUP_DIR||resolve(root,'backups'));mkdirSync(dir,{recursive:true});
const dest=resolve(dir,`opo-${new Date().toISOString().replaceAll(':','-')}.db`);
const db=new DatabaseSync(source,{readOnly:true});await backup(db,dest);db.close();
const check=new DatabaseSync(dest,{readOnly:true});if(check.prepare('PRAGMA integrity_check').get().integrity_check!=='ok')throw Error('Backup verification failed');check.close();console.log('Verified backup:',dest);

