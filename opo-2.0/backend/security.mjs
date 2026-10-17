import {createHash} from 'node:crypto';
import {isIP} from 'node:net';
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

function normalizeIp(value){return value.startsWith('::ffff:')?value.slice(7):value}
export function clientAddress(req,trustedText=process.env.OPO_TRUSTED_PROXIES||''){
 const trusted=new Set(trustedText.split(',').map(s=>normalizeIp(s.trim())).filter(Boolean));
 if([...trusted].some(value=>!isIP(value)))throw Error('INVALID_TRUSTED_PROXY_ADDRESS');
 const remote=normalizeIp(req.socket.remoteAddress||'');
 if(!trusted.has(remote))return remote;
 const raw=req.headers['x-forwarded-for'];if(typeof raw!=='string'||raw.length>1000)return remote;
 const chain=raw.split(',').map(s=>normalizeIp(s.trim()));if(chain.length>20||chain.some(value=>!isIP(value)))return remote;
 for(const value of chain.reverse())if(!trusted.has(value))return value;
 return remote;
}
