// Local synthetic baseline only. Does not exercise chain latency, production
// storage, a reverse proxy, external services or real customer accounts.
import {performance} from 'node:perf_hooks';
import {randomBytes} from 'node:crypto';
import {mkdirSync,writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {openDatabase,root,transaction} from '../backend/database.mjs';
import {createApp} from '../backend/server.mjs';
import {id,hash,passwordHash} from '../backend/domain.mjs';
const app=createApp({db:openDatabase(':memory:')}),d=app.domain;
const sharedHash=passwordHash('synthetic-'+id()),clients=[];
for(let i=0;i<100;i++){const uid=id(),token=randomBytes(32).toString('hex'),csrf=randomBytes(24).toString('hex');d.run('INSERT INTO users VALUES(?,?,?,?,?,?,?)',uid,'load'+i,'Synthetic',sharedHash,'customer',null,Date.now());d.run('INSERT INTO sessions(hash,user_id,csrf,expires) VALUES(?,?,?,?)',hash(token),uid,csrf,Date.now()+600000);transaction(app.db,()=>d.faucet(uid));d.setCart(uid,{product_id:'p1',qty:1});clients.push({uid,token,csrf})}
for(let i=7;i<=1000;i++)d.run('INSERT INTO products(id,merchant_id,names,description,category,icon,price,stock,status) VALUES(?,?,?,?,?,?,?,?,?)','p'+i,'opo-demo',JSON.stringify(['合成商品','Synthetic item','合成商品']),JSON.stringify(['','','']),0,'',100,100,'published');
await new Promise(r=>app.server.listen(0,'127.0.0.1',r));const base=`http://127.0.0.1:${app.server.address().port}`;
async function request(client,path,body){const start=performance.now(),response=await fetch(base+'/api'+path,{method:body===undefined?'GET':'POST',headers:{Origin:base,Cookie:'opo_session='+client.token,'X-CSRF-Token':client.csrf,'Idempotency-Key':id(),'Content-Type':'application/json'},body:body===undefined?undefined:JSON.stringify(body)});const data=await response.json();if(!response.ok)throw Error('LOAD_REQUEST_FAILED: '+path+' '+data.error);return {data,ms:performance.now()-start}}
try{
 const timings=[];for(let round=0;round<3;round++)timings.push(...(await Promise.all(clients.map(c=>request(c,'/products')))).map(r=>r.ms));
 const orderTimings=await Promise.all(clients.slice(0,10).map(async c=>{const quote=(await request(c,'/quote',{points:'0'})).data;return (await request(c,'/checkout',{quote_id:quote.quote_id,points:'0',expected_total:890,address:{name:'TEST',phone:'TEST',address:'TEST'}})).ms}));
 timings.sort((a,b)=>a-b);const report={scope:'Local Windows Node process, synthetic in-memory SQLite, loopback HTTP; not production capacity acceptance',at:new Date().toISOString(),products:1000,sessions:100,concurrentProductReads:100,readRequests:timings.length,readP95Ms:timings[Math.ceil(timings.length*.95)-1],concurrentCheckouts:10,maxCheckoutMs:Math.max(...orderTimings),orders:d.one('SELECT COUNT(*) n FROM orders').n};if(report.orders!==10)throw Error('CHECKOUT_COUNT_MISMATCH');mkdirSync(resolve(root,'test-results'),{recursive:true});writeFileSync(resolve(root,'test-results/load-report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
}finally{await new Promise(r=>app.server.close(r));app.db.close()}
