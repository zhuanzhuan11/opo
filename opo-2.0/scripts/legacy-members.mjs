import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
import {DatabaseSync} from 'node:sqlite';

export function parseCsv(text){
 const rows=[];let row=[],field='',quoted=false,closed=false;
 const push=()=>{row.push(field);field='';closed=false};
 for(let i=0;i<text.length;i++){
  const c=text[i];
  if(quoted){if(c==='"'){if(text[i+1]==='"'){field+='"';i++}else{quoted=false;closed=true}}else field+=c;continue}
  if(c==='"'){if(field||closed)throw Error('INVALID_CSV_QUOTE');quoted=true}
  else if(c===',')push();
  else if(c==='\n'||c==='\r'){if(c==='\r'&&text[i+1]==='\n')i++;push();rows.push(row);row=[]}
  else{if(closed)throw Error('INVALID_CSV_AFTER_QUOTE');field+=c}
 }
 if(quoted)throw Error('UNCLOSED_CSV_QUOTE');
 if(field||row.length||closed){push();rows.push(row)}
 if(rows[0]?.[0])rows[0][0]=rows[0][0].replace(/^\uFEFF/,'');
 return rows;
}
export function prepareMembers(bytes){
 const [headers,...rows]=parseCsv(new TextDecoder('utf-8',{fatal:true}).decode(bytes));
 if(!headers||new Set(headers).size!==headers.length||!['会员ID','推荐人ID'].every(h=>headers.includes(h)))throw Error('INVALID_HEADERS');
 if(!rows.length)throw Error('EMPTY_MEMBERS');
 const members=rows.map(row=>{
  if(row.length!==headers.length)throw Error('COLUMN_COUNT');
  const raw=Object.fromEntries(headers.map((h,i)=>[h,row[i]]));
  const id=raw['会员ID'],parent=raw['推荐人ID'];
  if(!/^\d+$/.test(id)||parent!==''&&!/^\d+$/.test(parent))throw Error('INVALID_ID');
  return {id,parent:parent===''||parent==='0'?null:parent,raw};
 });
 const ids=new Map(members.map(m=>[m.id,m]));
 if(ids.size!==members.length)throw Error('DUPLICATE_ID');
 for(const member of members){if(member.parent&&!ids.has(member.parent))throw Error('MISSING_PARENT');const seen=new Set();let at=member.id;while(at){if(seen.has(at))throw Error('REFERRAL_CYCLE');seen.add(at);at=ids.get(at).parent}}
 return {sha256:createHash('sha256').update(bytes).digest('hex'),headers,members};
}
export function stageMembers(bundle,target){
 if(existsSync(target))throw Error('TARGET_MUST_NOT_EXIST');
 const db=new DatabaseSync(target);
 try{
  db.exec(`PRAGMA foreign_keys=ON; BEGIN;
   CREATE TABLE legacy_batch(sha256 TEXT PRIMARY KEY,record_count INTEGER NOT NULL);
   CREATE TABLE legacy_members(id TEXT PRIMARY KEY,parent_id TEXT REFERENCES legacy_members(id) DEFERRABLE INITIALLY DEFERRED,raw_json TEXT NOT NULL,login_enabled INTEGER NOT NULL DEFAULT 0 CHECK(login_enabled=0));`);
  db.prepare('INSERT INTO legacy_batch VALUES(?,?)').run(bundle.sha256,bundle.members.length);
  const insert=db.prepare('INSERT INTO legacy_members(id,parent_id,raw_json) VALUES(?,?,?)');
  for(const m of bundle.members)insert.run(m.id,m.parent,JSON.stringify(m.raw));
  if(db.prepare('PRAGMA foreign_key_check').all().length)throw Error('FOREIGN_KEY_CHECK');
  db.exec('COMMIT');
  if(db.prepare('PRAGMA integrity_check').get().integrity_check!=='ok')throw Error('INTEGRITY_CHECK');
  const result=db.prepare('SELECT count(*) AS records,count(parent_id) AS edges FROM legacy_members').get();
  for(const m of bundle.members){const got=db.prepare('SELECT parent_id,raw_json FROM legacy_members WHERE id=?').get(m.id);if(got.parent_id!==m.parent||got.raw_json!==JSON.stringify(m.raw))throw Error('ROW_RECONCILIATION');}
  return {...result,roots:result.records-result.edges,sha256:bundle.sha256,loginEnabled:false,liveUsersImported:false};
 }catch(e){try{db.exec('ROLLBACK')}catch{}throw e}finally{db.close()}
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){
 try{
  const [source,target,report,...extra]=process.argv.slice(2);
  if(!source||!target||!report||extra.length)throw Error('USAGE: node scripts/legacy-members.mjs source.csv NEW-isolated.db NEW-report.json');
  if(existsSync(report)||resolve(source)===resolve(target))throw Error('OUTPUT_MUST_BE_NEW');
  const result=stageMembers(prepareMembers(readFileSync(source)),resolve(target));
  writeFileSync(report,JSON.stringify(result,null,2),{flag:'wx',mode:0o600});console.log(JSON.stringify(result));
 }catch(e){console.error(e.message);process.exitCode=1}
}
