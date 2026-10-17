import test from 'node:test';
import assert from 'node:assert/strict';
import {createApp} from '../backend/server.mjs';
import {openDatabase} from '../backend/database.mjs';
import {id} from '../backend/domain.mjs';

test('catalog membership binds default or explicit inviter without opening transaction features',async()=>{
 const app=createApp({db:openDatabase(':memory:'),mode:'catalog'});
 await new Promise(r=>app.server.listen(0,'127.0.0.1',r));const base=`http://127.0.0.1:${app.server.address().port}`;
 const post=(path,body,cookie)=>fetch(base+'/api/'+path,{method:'POST',headers:{Origin:base,'Content-Type':'application/json',...(cookie?{Cookie:cookie}:{})},body:JSON.stringify(body)});
 const password='synthetic-'+id(),member={username:'memberone',name:'Test',password,consent:true};
 try{
  assert.equal((await post('register',{...member,consent:false})).status,400);
  assert.equal((await post('register',{...member,invite:'unknown'})).status,400);
  assert.equal(app.domain.one("SELECT id FROM users WHERE username='memberone'"),undefined);
  const registered=await post('register',member);assert.equal(registered.status,200);const data=await registered.json();assert.equal(data.user.inviter,'opo-platform');assert.equal(data.user.role,'customer');
  const cookie=registered.headers.get('set-cookie').split(';')[0];assert.match(cookie,/opo_session=/);
  assert.equal((await (await fetch(base+'/api/session',{headers:{Cookie:cookie}})).json()).user.username,'memberone');
  const referred=await post('register',{...member,username:'membertwo',invite:' MEMBERONE '});assert.equal((await referred.json()).user.inviter,data.user.id);
  const whitespace=await post('register',{...member,username:'memberthree',invite:'   '});assert.equal((await whitespace.json()).user.inviter,'opo-platform');
  assert.equal((await post('register',member)).status,409);
  assert.equal((await post('login',{username:'opo',password})).status,401);
  assert.equal((await post('login',{username:member.username,password})).status,200);
  assert.equal((await fetch(base+'/api/catalog/admin',{headers:{Cookie:cookie}})).status,403);
  for(const path of ['checkout','subscribe','exchange','test-credit'])assert.equal((await post(path,{},cookie)).status,404);
  const logout=await fetch(base+'/api/logout',{method:'POST',headers:{Origin:base,'Content-Type':'application/json',Cookie:cookie,'X-CSRF-Token':data.csrf},body:'{}'});assert.equal(logout.status,200);
  assert.equal((await (await fetch(base+'/api/session',{headers:{Cookie:cookie}})).json()).user,null);
  assert.equal(app.domain.one('SELECT COUNT(*) n FROM journal').n,0);
  assert.equal((await fetch(base+'/assets/catalog-members.js')).status,200);
 }finally{await new Promise(r=>app.server.close(r));app.db.close()}
});
