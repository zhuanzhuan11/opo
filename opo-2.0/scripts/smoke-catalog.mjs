import {writeFileSync} from 'node:fs';
const input=process.argv[2]||'http://127.0.0.1:3200',url=new URL(input);
if(!['http:','https:'].includes(url.protocol)||url.username||url.password||url.pathname!=='/'||url.search||url.hash)throw Error('Use an HTTP(S) origin without credentials/path/query');
if(url.protocol!=='https:'&&!['127.0.0.1','localhost','[::1]'].includes(url.hostname))throw Error('Remote catalog checks require HTTPS');
const results=[];
async function check(path,expected,inspect){try{const response=await fetch(url.origin+path,{redirect:'error',signal:AbortSignal.timeout(10000)});const body=await response.text();if(response.status!==expected)throw Error('UNEXPECTED_HTTP_'+response.status);if(inspect)inspect(response,body);results.push({path,ok:true,status:response.status})}catch(e){results.push({path,ok:false,error:e.message})}}
await check('/',200,(r,b)=>{if(!b.includes('/assets/catalog.js'))throw Error('WRONG_FRONTEND');if(!r.headers.get('content-security-policy')||r.headers.get('x-frame-options')!=='DENY')throw Error('SECURITY_HEADERS_MISSING')});
await check('/api/health',200,(_,body)=>{if(JSON.parse(body).mode!=='catalog')throw Error('NOT_CATALOG_MODE')});
await check('/api/public/config',200,(_,body)=>{const c=JSON.parse(body);if(c.paymentsEnabled!==false||!c.inquiriesEnabled)throw Error('PUBLIC_CONFIGURATION_INCOMPLETE')});
await check('/api/public/products',200,(_,body)=>{if(!Array.isArray(JSON.parse(body)))throw Error('INVALID_PRODUCT_RESPONSE')});
for(const path of ['/checkout.html','/exchange.html','/points.html','/api/checkout','/api/subscribe','/api/exchange','/api/test-credit','/backend/server.mjs','/database/runtime/opo.db','/.secrets/mfa-key'])await check(path,404);
await check('/api/catalog/admin',401);
const report={at:new Date().toISOString(),base:url.origin,readOnly:true,ok:results.every(r=>r.ok),checks:results,notVerified:['POST inquiry delivery','MFA login','restart persistence','off-host restoration','production capacity']};
if(process.argv[3])writeFileSync(process.argv[3],JSON.stringify(report,null,2),{flag:'wx'});console.log(JSON.stringify(report,null,2));if(!report.ok)process.exitCode=1;
