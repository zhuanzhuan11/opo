import http from 'node:http';
import {readFileSync,existsSync,statSync} from 'node:fs';
import {resolve,extname,sep} from 'node:path';
import {randomBytes} from 'node:crypto';
import {pathToFileURL} from 'node:url';
import {openDatabase,root,transaction} from './database.mjs';
import {Domain,id,hash,fail,text,integer,passwordHash} from './domain.mjs';
import {catalogConfig,catalogProducts,submitInquiry,catalogAdmin,saveCatalogProduct,updateInquiry} from './catalog.mjs';
import {reconcile} from './reconcile.mjs';
import {rateLimit,validateOrigin,clientAddress} from './security.mjs';
import {mfaEnabled,verifyMfa,beginEnrollment,confirmEnrollment,mfaKeyConfigured} from './mfa.mjs';

export function createApp({db=openDatabase(process.env.OPO_DATABASE),mode=process.env.OPO_MODE||'sandbox',sandbox=mode==='sandbox',now=()=>Date.now()}={}){
 if(!['sandbox','catalog','production'].includes(mode))throw Error('INVALID_OPO_MODE');
 const isCatalog=mode==='catalog';
 const d=new Domain(db,{sandbox,now});if(isCatalog){const existing=d.one("SELECT id FROM users WHERE username='opo'");if(existing&&existing.id!=='opo-platform')throw Error('PLATFORM_INVITE_CONFLICT');d.run("INSERT OR IGNORE INTO users VALUES('opo-platform','opo','OPO商城',?,'customer',NULL,?)",passwordHash(randomBytes(32).toString('hex')),now())}if(isCatalog)d.run('DELETE FROM catalog_inquiries WHERE expires<=?',now());let origin=validateOrigin(process.env.OPO_ORIGIN);
 const server=http.createServer(async(req,res)=>{
 let status=200;let headers={'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'same-origin','X-Frame-Options':'DENY','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'"};
 const send=(body,code=status)=>{if(res.destroyed||res.writableEnded)return;res.writeHead(code,headers);res.end(JSON.stringify(body))};
 try{
  const url=new URL(req.url,'http://localhost');const p=url.pathname;const method=req.method;const remote=clientAddress(req);
  if(origin?.startsWith('https:'))headers['Strict-Transport-Security']='max-age=31536000';
  if(!p.startsWith('/api/')){
   if(isCatalog){const allowedPaths=['/','/index.html','/catalog.html','/catalog-admin.html','/assets/catalog.js','/assets/catalog-members.js','/assets/catalog-admin.js','/assets/catalog.css'];if(!allowedPaths.includes(p))fail('NOT_FOUND',404);headers['Content-Security-Policy']=headers['Content-Security-Policy'].replace("img-src 'self' data:","img-src 'self' data: https:")}
   if(method!=='GET'&&method!=='HEAD')fail('METHOD_NOT_ALLOWED',405);
   let file=resolve(root,'frontend','.'+decodeURIComponent(isCatalog&&(p==='/'||p==='/index.html')?'/catalog.html':p==='/'?'/index.html':p));const allowed=resolve(root,'frontend')+sep;
   if(!file.startsWith(allowed)||!existsSync(file)||!statSync(file).isFile())fail('NOT_FOUND',404);
   const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png'};
   headers['Content-Type']=types[extname(file)]||'application/octet-stream';res.writeHead(200,headers);res.end(method==='HEAD'?undefined:readFileSync(file));return;
  }
  if(!['GET','POST'].includes(method))fail('METHOD_NOT_ALLOWED',405);
  let b={};if(method==='POST'){
   rateLimit(db,'mutations',remote,180,60000,now());
   const expected=origin||`http://127.0.0.1:${server.address().port}`;
   if(req.headers.origin!==expected)fail('ORIGIN_REJECTED',403);
   if(!req.headers['content-type']?.startsWith('application/json'))fail('JSON_REQUIRED',415);
   if(Number(req.headers['content-length'])>64000)fail('REQUEST_TOO_LARGE',413);
   let size=0,chunks=[];for await(const part of req){size+=part.length;if(size>64000)fail('REQUEST_TOO_LARGE',413);chunks.push(part)}try{b=JSON.parse(Buffer.concat(chunks).toString('utf8'))}catch{fail('INVALID_JSON')};if(!b||Array.isArray(b)||typeof b!=='object')fail('INVALID_JSON');
  }
  if(isCatalog){
   if(p==='/api/public/config'&&method==='GET')return send(catalogConfig());
   if(p==='/api/public/products'&&method==='GET')return send(catalogProducts(d,{offset:Number(url.searchParams.get('offset')||0),limit:Number(url.searchParams.get('limit')||100),search:url.searchParams.get('search')||''}));
   if(p==='/api/public/inquiries'&&method==='POST')return send(d.idem('public:'+hash(remote),req.headers['idempotency-key'],p,b,()=>submitInquiry(d,b,remote)),201);
   if(!['/api/health','/api/session','/api/register','/api/login','/api/logout','/api/admin/security','/api/admin/mfa/begin','/api/admin/mfa/confirm','/api/catalog/admin','/api/catalog/products/save','/api/catalog/inquiries/update'].includes(p))fail('FEATURE_NOT_AVAILABLE',404);
  }
  const cookie=(req.headers.cookie||'').split(';').map(s=>s.trim()).find(s=>s.startsWith('opo_session='))?.slice(12)||'';
  const session=d.one('SELECT * FROM sessions WHERE hash=? AND expires>?',hash(cookie),now());const u=session?d.user(session.user_id):null;
  if(p==='/api/health')return send({ok:true,version:'2.0.0-preview.3',mode:isCatalog?'catalog':sandbox?'sandbox':'production-disabled'});
  if(p==='/api/products'&&method==='GET')return send(d.products());
  if(['/api/register','/api/login'].includes(p)&&method==='POST'){
   rateLimit(db,'auth-ip',remote,30,900000,now());
   if(typeof b.username==='string')rateLimit(db,'auth-account',b.username.trim().toLowerCase(),20,900000,now());
   if(isCatalog&&p==='/api/register'){if(b.consent!==true)fail('CONSENT_REQUIRED');if(b.invite!==undefined&&typeof b.invite!=='string')fail('INVALID_INVITE');b.invite=b.invite?.trim()||'opo'}if(isCatalog&&p==='/api/login'&&b.username?.trim().toLowerCase()==='opo')fail('BAD_CREDENTIALS',401);
   let verified=false;const user=transaction(db,()=>{const result=p==='/api/register'?d.register(b):d.login(b);if(result.role==='admin'&&mfaEnabled(d,result.id))verified=verifyMfa(d,result.id,b.otp);return result});const token=randomBytes(32).toString('hex'),csrf=randomBytes(24).toString('hex');
   d.run('INSERT INTO sessions(hash,user_id,csrf,expires,mfa_verified) VALUES(?,?,?,?,?)',hash(token),user.id,csrf,now()+8*3600000,verified?1:0);headers['Set-Cookie']=`opo_session=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=28800${origin?.startsWith('https:')?'; Secure':''}`;return send({user,csrf,sandbox});
  }
  if(p==='/api/session'&&method==='GET')return send({user:u,csrf:session?.csrf||null,sandbox,mode});
  if(!u)fail('UNAUTHORIZED',401);if(method==='POST'&&req.headers['x-csrf-token']!==session.csrf)fail('CSRF_REJECTED',403);
  const admin=()=>{if(u.role!=='admin')fail('FORBIDDEN',403);if(mfaEnabled(d,u.id)&&!session.mfa_verified)fail('MFA_REQUIRED',401)};
  if(p==='/api/admin/security'&&method==='GET'){admin();return send({enabled:mfaEnabled(d,u.id),keyConfigured:mfaKeyConfigured()})}
  if(p==='/api/admin/mfa/begin'&&method==='POST'){admin();rateLimit(db,'mfa',u.id,10,900000,now());return send(transaction(db,()=>beginEnrollment(d,u,b.password)))}
  if(p==='/api/admin/mfa/confirm'&&method==='POST'){admin();rateLimit(db,'mfa',u.id,10,900000,now());return send(transaction(db,()=>confirmEnrollment(d,u,b.otp,session.hash)))}
  if(p==='/api/logout'&&method==='POST'){d.run('DELETE FROM sessions WHERE hash=?',session.hash);headers['Set-Cookie']=`opo_session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0${origin?.startsWith('https:')?'; Secure':''}`;return send({ok:true})}
  if(isCatalog&&p.startsWith('/api/catalog/')){admin();if(!mfaEnabled(d,u.id))fail('MFA_SETUP_REQUIRED',403);if(p==='/api/catalog/admin'&&method==='GET')return send(catalogAdmin(d));if(p==='/api/catalog/products/save'&&method==='POST')return send(d.idem(u.id,req.headers['idempotency-key'],p,b,()=>saveCatalogProduct(d,u,b)));if(p==='/api/catalog/inquiries/update'&&method==='POST')return send(d.idem(u.id,req.headers['idempotency-key'],p,b,()=>updateInquiry(d,u,b)));fail('NOT_FOUND',404)}
  if(method==='GET'){
   if(p==='/api/cart')return send(d.cart(u.id));
   if(p==='/api/orders')return send(d.orderList(u.id,url.searchParams.get('scope')==='seller'&&u.role==='merchant'?'merchant':'customer'));
   if(p==='/api/points')return send({user:u,ledger:d.all('SELECT * FROM journal WHERE debit LIKE ? OR credit LIKE ? ORDER BY id DESC LIMIT 200',`user:${u.id}:%`,`user:${u.id}:%`),referrals:d.all('SELECT username,name,created FROM users WHERE inviter=?',u.id),subscriptions:d.all('SELECT * FROM subscriptions WHERE user_id=? ORDER BY created DESC',u.id),exchanges:d.all('SELECT * FROM exchanges WHERE user_id=? ORDER BY created DESC',u.id)});
   if(p==='/api/merchant')return send({merchant:u.merchant,products:d.products(true).filter(x=>u.role==='admin'||x.merchant_id===u.merchant?.id),jobs:d.all('SELECT id,kind,ref,status,attempts,created FROM jobs WHERE json_extract(payload,\'$.merchant\')=?',u.merchant?.id||'' )});
   if(p==='/api/admin/health'){admin();return send({reconciliation:reconcile(d),notificationsPending:d.one("SELECT COUNT(*) n FROM jobs WHERE status!='delivered'").n})}
   if(p==='/api/admin'){admin();return send({products:d.products(true),merchants:d.all('SELECT * FROM merchants'),orders:d.orderList(u.id,'admin'),users:d.all('SELECT id,username,name,role,inviter FROM users'),settings:d.settings(),ruleProposals:d.all('SELECT * FROM rule_proposals ORDER BY created DESC LIMIT 100').map(p=>({...p,value:JSON.parse(p.value)})),finance:d.finance(),jobs:d.all('SELECT * FROM jobs ORDER BY created DESC'),reports:d.all('SELECT * FROM reports ORDER BY created DESC LIMIT 30').map(x=>JSON.parse(x.body)),tickets:d.all('SELECT * FROM tickets ORDER BY created DESC'),candidates:d.all('SELECT * FROM candidates ORDER BY created DESC'),audit:d.all('SELECT * FROM audit ORDER BY id DESC LIMIT 100')})}
   fail('NOT_FOUND',404);
  }
  if(u.role==='admin'&&mfaEnabled(d,u.id)&&!session.mfa_verified)fail('MFA_REQUIRED',401);
  let action;
  if(p==='/api/cart')action=()=>d.setCart(u.id,b);
  else if(p==='/api/quote')action=()=>d.createCheckoutQuote(u.id,amountInput(b.points));
  else if(p==='/api/checkout')action=()=>{text(b.quote_id);return d.checkout(u.id,b)};
  else if(p==='/api/test-credit')action=()=>d.faucet(u.id);
  else if(p==='/api/subscribe')action=()=>d.subscribe(u.id,b);
  else if(p==='/api/release')action=()=>d.release(u.id);
  else if(p==='/api/exchange-quote')action=()=>d.exchangeQuote(u.id,b);
  else if(p==='/api/exchange')action=()=>d.exchange(u.id,b);
  else if(p.startsWith('/api/orders/'))action=()=>d.orderAction(u,decodeURIComponent(p.slice(12)),b);
  else if(p==='/api/merchant/apply')action=()=>d.merchantApply(u.id,b);
  else if(p==='/api/products/save')action=()=>d.productSave(u,b);
  else if(p==='/api/admin/merchant'){admin();action=()=>d.merchantApprove(u,b)}
  else if(p==='/api/admin/settings'){admin();action=()=>d.proposeRules(u.id,b)}
  else if(p==='/api/admin/settings/review'){admin();action=()=>d.reviewRules(u.id,b)}
  else if(p==='/api/admin/report'){admin();action=()=>d.report()}
  else if(p==='/api/admin/ticket'){admin();action=()=>{const status=b.status==='closed'?'closed':'open';d.run('UPDATE tickets SET status=? WHERE id=?',status,text(b.id));d.audit(u.id,'ticket.update',b.id,{status});return {ok:true}}}
  else if(p==='/api/admin/candidate'){admin();action=()=>{const cid=id();if(!Array.isArray(b.names)||b.names.length!==3)fail('INVALID_INPUT');b.names.forEach(n=>text(n,1,100));const source=new URL(text(b.source,1,500));if(source.protocol!=='https:')fail('INVALID_SOURCE');d.run('INSERT INTO candidates VALUES(?,?,?,?,?,?,?)',cid,JSON.stringify(b.names),integer(b.cost,1,10000000),integer(b.multiplier,250,300),source.href,'pending',now());d.audit(u.id,'candidate.import',cid);return {id:cid}}}
  else if(p==='/api/support')action=()=>{const message=text(b.message,1,2000),tid=id();d.run('INSERT INTO tickets VALUES(?,?,?,?,?)',tid,u.id,message,'open',now());return {id:tid,answer:'HUMAN_TICKET_CREATED',ai:false}};
  else fail('NOT_FOUND',404);
  const result=d.idem(u.id,req.headers['idempotency-key'],p,b,action);send(result);
 }catch(e){send({error:e.status?e.message:'INTERNAL_ERROR'},e.status||500);if(!e.status)console.error('Request failed:',e.name)}
 });
 server.requestTimeout=15000;server.headersTimeout=10000;
 return {server,domain:d,db,setOrigin:v=>{origin=validateOrigin(v)}};
}
function amountInput(v){if(typeof v!=='string'||!/^\d{1,9}(\.\d{1,2})?$/.test(v))fail('INVALID_AMOUNT');const [a,b='']=v.split('.');return Number(a)*100+Number(b.padEnd(2,'0'))}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){
 if(process.env.OPO_MODE==='production'){console.error('Production activation is blocked: payment adapters, reserve policy, security review and operational approval are not completed.');process.exit(1)}
 const app=createApp();const port=Number(process.env.PORT||3200),host=process.env.HOST||'127.0.0.1';
 if(!['127.0.0.1','localhost'].includes(host)&&!process.env.OPO_ORIGIN){console.error('OPO_ORIGIN must be set when binding a public interface');process.exit(1)}
 if(process.env.OPO_MODE==='catalog'&&!['127.0.0.1','localhost'].includes(host)){if(!process.env.OPO_ORIGIN?.startsWith('https:')||!catalogConfig().inquiriesEnabled||!mfaKeyConfigured()||!app.domain.one('SELECT user_id FROM admin_mfa')){console.error('Public catalog requires HTTPS origin, operator/contact, MFA key and an enrolled administrator.');app.db.close();process.exit(1)}}
 app.server.listen(port,host,()=>console.log(`OPO 2.0 ${process.env.OPO_MODE||'sandbox'}: http://127.0.0.1:${port}`));
 const timer=setInterval(()=>{try{if(process.env.OPO_MODE==='catalog')app.domain.run('DELETE FROM catalog_inquiries WHERE expires<=?',Date.now());else app.domain.tick()}catch{console.error('Scheduled task failed')}},60000);timer.unref();
 const stop=()=>{clearInterval(timer);app.server.close(()=>{app.db.close();process.exit(0)})};process.on('SIGTERM',stop);process.on('SIGINT',stop);
}


