import {createHash} from 'node:crypto';
import {fail} from './domain.mjs';

// Hash bucket identifiers; never persist plaintext usernames/IP addresses here.
export function rateLimit(db,namespace,value,limit,windowMs,now=Date.now()){
 const key=createHash('sha256').update(namespace+'\0'+value).digest('hex');
 db.prepare('DELETE FROM login_attempts WHERE expires<=?').run(now);
 const found=db.prepare('SELECT * FROM login_attempts WHERE bucket=?').get(key);
 if(found?.count>=limit)fail('RATE_LIMITED',429);
 if(!found&&db.prepare('SELECT COUNT(*) n FROM login_attempts').get().n>=10000)fail('RATE_LIMITED',429);
 db.prepare('INSERT INTO login_attempts VALUES(?,1,?) ON CONFLICT(bucket) DO UPDATE SET count=count+1').run(key,now+windowMs);
}

export function validateOrigin(value){
 if(value===undefined||value===null||value==='')return null;
 const parsed=new URL(value);
 if(!['https:','http:'].includes(parsed.protocol)||parsed.origin!==value||parsed.username||parsed.password)throw Error('OPO_ORIGIN must be an exact HTTP(S) origin without a path');
 return value;
}
