import test from 'node:test';
import assert from 'node:assert/strict';
import {createApp} from '../backend/server.mjs';
import {openDatabase} from '../backend/database.mjs';
import {id} from '../backend/domain.mjs';
test('HTTP authentication, CSRF, path protection, persistent checkout and permissions',async()=>{
 const app=createApp({db:openDatabase(':memory:')});await new Promise(r=>app.server.listen(0,'127.0.0.1',r));const base=`http://127.0.0.1:${app.server.address().port}`;let cookie='',csrf='';
 async function req(path,body,extra={}){const r=await fetch(base+path,{method:body?'POST':'GET',headers:{Origin:base,Cookie:cookie,'Content-Type':'application/json','X-CSRF-Token':csrf,'Idempotency-Key':id(),...extra},body:body?JSON.stringify(body):undefined});return {r,data:await r.json()}}
 try{
 assert.equal((await fetch(base+'/index.html')).status,200);assert.equal((await fetch(base+'/backend/server.mjs')).status,404);
 assert.equal((await req('/api/orders')).r.status,401);
 const signup=await req('/api/register',{username:'tester',name:'Test',password:'test-only-'+id()});assert.equal(signup.r.status,200);cookie=signup.r.headers.get('set-cookie').split(';')[0];csrf=signup.data.csrf;assert.match(signup.r.headers.get('set-cookie'),/HttpOnly/);
 assert.equal((await req('/api/test-credit',{}, {'X-CSRF-Token':'bad'})).r.status,403);
 assert.equal((await req('/api/test-credit',{}, {Origin:'https://evil.invalid'})).r.status,403);
 assert.equal((await req('/api/test-credit',{})).r.status,200);
 assert.equal((await req('/api/admin')).r.status,403);
 await req('/api/cart',{product_id:'p1',sku:'standard',qty:1});
 assert.equal((await req('/api/checkout',{points:'5',expected_total:890,address:{name:'Test',phone:'TEST',address:'TEST'}})).r.status,400);
 const body={points:'4.45',expected_total:890,address:{name:'Test',phone:'TEST',address:'TEST'}},key=id();
 const order=await req('/api/checkout',body,{'Idempotency-Key':key});assert.equal(order.r.status,200);
 const repeat=await req('/api/checkout',body,{'Idempotency-Key':key});assert.deepEqual(order.data,repeat.data);
 assert.equal((await req('/api/orders')).data.length,1);
 await req('/api/logout',{});assert.equal((await req('/api/orders')).r.status,401);
 }finally{await new Promise(r=>app.server.close(r));app.db.close()}
});
