import {DatabaseSync} from 'node:sqlite';
import {mkdirSync,readFileSync,readdirSync,chmodSync} from 'node:fs';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
export const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
export function openDatabase(path=resolve(root,'database/runtime/opo.db')){
 if(path!==':memory:')mkdirSync(dirname(path),{recursive:true});
 const db=new DatabaseSync(path);
 try{
 db.exec('PRAGMA foreign_keys=ON; PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000; PRAGMA synchronous=FULL;');
 db.exec('CREATE TABLE IF NOT EXISTS migrations(version INTEGER PRIMARY KEY, applied_at INTEGER NOT NULL)');
 const directory=resolve(root,'database/migrations');
 const files=readdirSync(directory).filter(f=>/^\d+_.+\.sql$/.test(f)).sort();
 const applied=new Set(db.prepare('SELECT version FROM migrations').all().map(r=>r.version));
 const known=new Set(files.map(f=>Number(f.split('_')[0])));
 if([...applied].some(v=>!known.has(v)))throw Error('DATABASE_SCHEMA_NEWER_THAN_CODE');
 for(const file of files){const version=Number(file.split('_')[0]);if(!applied.has(version))transaction(db,()=>{db.exec(readFileSync(resolve(directory,file),'utf8'));db.prepare('INSERT OR IGNORE INTO migrations VALUES(?,?)').run(version,Date.now())})}
 if(path!==':memory:'&&process.platform!=='win32')chmodSync(path,0o600);
 }catch(e){db.close();throw e}
 return db;
}
export function transaction(db,fn){db.exec('BEGIN IMMEDIATE');try{const result=fn();db.exec('COMMIT');return result}catch(e){db.exec('ROLLBACK');throw e}}

