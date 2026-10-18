import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,writeFileSync,readFileSync,readdirSync,rmSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {spawn,spawnSync} from 'node:child_process';
import {randomBytes} from 'node:crypto';
import {encryptBackup,decryptBackup} from '../backend/backup-crypto.mjs';
import {openDatabase,root} from '../backend/database.mjs';
import {Domain,id} from '../backend/domain.mjs';
import {saveCatalogProduct,submitInquiry} from '../backend/catalog.mjs';
import {createApp} from '../backend/server.mjs';

test('encrypted backup authenticates bytes, refuses overwrite and removes unauthenticated output',async()=>{
 const dir=mkdtempSync(join(tmpdir(),'opo-crypto-'));try{
  const input=join(dir,'source.db'),key=join(dir,'key'),wrong=join(dir,'wrong-key'),encrypted=join(dir,'backup.opobak'),output=join(dir,'restored.db');
  const content=randomBytes(2*1024*1024+7);writeFileSync(input,content);writeFileSync(key,randomBytes(32).toString('hex'));writeFileSync(wrong,randomBytes(32).toString('hex'));
  await encryptBackup(input,encrypted,key);await decryptBackup(encrypted,output,key);assert.deepEqual(readFileSync(output),content);
  await assert.rejects(()=>decryptBackup(encrypted,output,key),/EEXIST/);assert.deepEqual(readFileSync(output),content);
  await assert.rejects(()=>decryptBackup(encrypted,join(dir,'wrong.db'),wrong));assert.equal(existsSync(join(dir,'wrong.db')),false);
  const corrupted=readFileSync(encrypted);corrupted[25]^=1;writeFileSync(join(dir,'tampered.opobak'),corrupted);
  await assert.rejects(()=>decryptBackup(join(dir,'tampered.opobak'),join(dir,'tampered.db'),key));assert.equal(existsSync(join(dir,'tampered.db')),false);
  assert.equal(readdirSync(dir).some(n=>n.endsWith('.tmp')),false);assert.deepEqual(readFileSync(input),content);
 }finally{rmSync(dir,{recursive:true,force:true})}
});

test('encrypted CLI snapshot restores catalog products and consented inquiries without changing source',async()=>{
 const dir=mkdtempSync(join(tmpdir(),'opo-catalog-backup-')),path=join(dir,'source.db'),key=join(dir,'backup-key'),out=join(dir,'encrypted');
 const saved={operator:process.env.OPO_OPERATOR_NAME,email:process.env.OPO_SUPPORT_EMAIL};process.env.OPO_OPERATOR_NAME='Synthetic operator';process.env.OPO_SUPPORT_EMAIL='synthetic@example.invalid';let db;
 try{
  db=openDatabase(path);const d=new Domain(db,{sandbox:false}),u=d.register({username:'owner',name:'Synthetic',password:'synthetic-'+id()});d.run("UPDATE users SET role='admin' WHERE id=?",u.id);const p=saveCatalogProduct(d,d.user(u.id),{names:['测试','Test','テスト'],descriptions:['合成','Synthetic','テスト'],published:true});submitInquiry(d,{product_id:p.id,email:'test@example.invalid',message:'Synthetic only',consent:true,consent_version:'catalog-inquiry-v1'},'127.0.0.1');db.close();db=null;
  const original=readFileSync(path);writeFileSync(key,randomBytes(32).toString('hex'));
  const env={...process.env,OPO_DATABASE:path,OPO_BACKUP_DIR:out,OPO_BACKUP_KEY_FILE:key};
  const result=spawnSync(process.execPath,['scripts/backup-encrypted.mjs'],{cwd:root,env,encoding:'utf8'});assert.equal(result.status,0,result.stderr);const backup=JSON.parse(result.stdout);assert.equal(backup.remoteCopyVerified,false);
  const restored=join(dir,'isolated.db');await decryptBackup(backup.encryptedFile,restored,key);
  const check=spawnSync(process.execPath,['scripts/restore-check.mjs',restored],{cwd:root,encoding:'utf8'});assert.equal(check.status,0,check.stderr);const report=JSON.parse(check.stdout);assert.equal(report.catalogProducts,1);assert.equal(report.catalogInquiries,1);assert.deepEqual(readFileSync(path),original);assert.equal(readdirSync(out).some(n=>n.startsWith('.snapshot-')),false);
 }finally{db?.close();rmSync(dir,{recursive:true,force:true});for(const [k,v] of [['OPO_OPERATOR_NAME',saved.operator],['OPO_SUPPORT_EMAIL',saved.email]])if(v===undefined)delete process.env[k];else process.env[k]=v}
});

test('catalog smoke checks are read-only and confirm financial and private paths are closed',async()=>{
 const saved={operator:process.env.OPO_OPERATOR_NAME,email:process.env.OPO_SUPPORT_EMAIL};process.env.OPO_OPERATOR_NAME='Synthetic operator';process.env.OPO_SUPPORT_EMAIL='test@example.invalid';const app=createApp({db:openDatabase(':memory:'),mode:'catalog'});await new Promise(r=>app.server.listen(0,'127.0.0.1',r));
 try{const result=await new Promise(resolve=>{const child=spawn(process.execPath,['scripts/smoke-catalog.mjs',`http://127.0.0.1:${app.server.address().port}`],{cwd:root});let output='',error='';child.stdout.on('data',b=>output+=b);child.stderr.on('data',b=>error+=b);child.on('close',code=>resolve({code,output,error}))});assert.equal(result.code,0,result.error);assert.equal(JSON.parse(result.output).readOnly,true);assert.equal(app.domain.one('SELECT COUNT(*) n FROM catalog_inquiries').n,0);assert.equal(app.domain.one('SELECT COUNT(*) n FROM orders').n,0)}finally{await new Promise(r=>app.server.close(r));app.db.close();for(const [k,v] of [['OPO_OPERATOR_NAME',saved.operator],['OPO_SUPPORT_EMAIL',saved.email]])if(v===undefined)delete process.env[k];else process.env[k]=v}
});
