import test from 'node:test';
import assert from 'node:assert/strict';
import {createApp} from '../backend/server.mjs';
import {openDatabase} from '../backend/database.mjs';
import {totp} from '../backend/mfa.mjs';
import {id} from '../backend/domain.mjs';
test('HTTP MFA enrollment invalidates other sessions, requires OTP on login and forbids replay',async()=>{
 const saved=process.env.OPO_MFA_KEY;process.env.OPO_MFA_KEY='bc'.repeat(32);
 let clock=Date.UTC(2026,9,17);const app=createApp({db:openDatabase(':memory:'),now:()=>clock});await new Promise(r=>app.server.listen(0,'127.0.0.1',r));const base=`http://127.0.0.1:${app.server.address().port}`;let cookie='',csrf='';
 const password='temporary-'+id(),user=app.domain.register({username:'owner',name:'Owner',password});app.domain.run("UPDATE users SET role='admin' WHERE id=?",user.id);
 async function request(path,body){const r=await fetch(base+'/api'+path,{method:body===undefined?'GET':'POST',headers:{Origin:base,Cookie:cookie,'Content-Type':'application/json','X-CSRF-Token':csrf,'Idempotency-Key':id()},body:body===undefined?undefined:JSON.stringify(body)});return {r,data:await r.json()}}
 function use(result){cookie=result.r.headers.get('set-cookie').split(';')[0];csrf=result.data.csrf}
 try{
  use(await request('/login',{username:'owner',password}));const oldCookie=cookie;
  use(await request('/login',{username:'owner',password}));
  assert.equal((await request('/admin/security')).data.enabled,false);
  const setup=await request('/admin/mfa/begin',{password});assert.equal(setup.r.status,200);
  const code=totp(setup.data.secret,Math.floor(clock/30000));assert.equal((await request('/admin/mfa/confirm',{otp:code})).r.status,200);
  assert.equal((await request('/admin/security')).data.enabled,true);
  const current=cookie;cookie=oldCookie;assert.equal((await request('/admin')).r.status,401);cookie=current;
  await request('/logout',{});cookie='';csrf='';
  assert.equal((await request('/login',{username:'owner',password})).r.status,401);
  assert.equal((await request('/login',{username:'owner',password,otp:code})).r.status,401);
  clock+=30000;use(await request('/login',{username:'owner',password,otp:totp(setup.data.secret,Math.floor(clock/30000))}));assert.equal((await request('/admin')).r.status,200);
 }finally{await new Promise(r=>app.server.close(r));app.db.close();if(saved===undefined)delete process.env.OPO_MFA_KEY;else process.env.OPO_MFA_KEY=saved}
});
