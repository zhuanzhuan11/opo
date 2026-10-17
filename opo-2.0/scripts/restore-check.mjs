import {DatabaseSync,backup} from 'node:sqlite';
import {mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {resolve,join} from 'node:path';
import {openDatabase} from '../backend/database.mjs';
import {Domain} from '../backend/domain.mjs';
import {reconcile} from '../backend/reconcile.mjs';
const source=process.argv[2];if(!source)throw Error('Usage: node scripts/restore-check.mjs <backup.db>');
const dir=mkdtempSync(join(tmpdir(),'opo-restore-check-'));
let input,restored;
try{
 input=new DatabaseSync(resolve(source),{readOnly:true});
 if(input.prepare('PRAGMA integrity_check').get().integrity_check!=='ok')throw Error('BACKUP_CORRUPT');
 const target=join(dir,'restored.db');await backup(input,target);input.close();input=null;
 restored=openDatabase(target);
 if(restored.prepare('PRAGMA foreign_key_check').all().length)throw Error('FOREIGN_KEY_CHECK_FAILED');
 const d=new Domain(restored,{sandbox:false}),result=reconcile(d);
 if(!result.ok)throw Error('RESTORED_LEDGER_RECONCILIATION_FAILED');
 console.log(JSON.stringify({ok:true,scope:'Isolated copy; production database untouched; no chain replay',migrations:d.all('SELECT version FROM migrations').map(r=>r.version),users:d.one('SELECT COUNT(*) n FROM users').n,orders:d.one('SELECT COUNT(*) n FROM orders').n,catalogProducts:d.one('SELECT COUNT(*) n FROM catalog_products').n,catalogInquiries:d.one('SELECT COUNT(*) n FROM catalog_inquiries').n,expiredInquiries:d.one('SELECT COUNT(*) n FROM catalog_inquiries WHERE expires<=?',Date.now()).n}));
}finally{input?.close();restored?.close();rmSync(dir,{recursive:true,force:true})}
