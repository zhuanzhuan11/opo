import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {prepareMembers,parseCsv,stageMembers} from '../scripts/legacy-members.mjs';
const csv=s=>Buffer.from('会员ID,推荐人ID,姓名\r\n'+s);
test('CSV preserves BOM, quoted commas, newlines and large string IDs',()=>{
 assert.deepEqual(parseCsv('\uFEFFa,b\r\n"x,y","a\n""b"\r\n'),[['a','b'],['x,y','a\n"b']]);
 const b=prepareMembers(csv('001,0,root\r\n9007199254740993123,001,child'));
 assert.equal(b.members[1].parent,'001');assert.equal(b.members[0].raw['推荐人ID'],'0');
});
test('rejects malformed, duplicate, missing parent and cyclic input',()=>{
 for(const s of ['1,0,a\n1,0,b','1,2,a','1,1,a','1,2,a\n2,1,b','1,0','1,0,"open'])assert.throws(()=>prepareMembers(csv(s)));
});
test('isolated staging preserves every row and refuses target overwrite',()=>{
 const dir=mkdtempSync(join(tmpdir(),'opo-legacy-'));
 try{const target=join(dir,'stage.db'),bundle=prepareMembers(csv('002,001,child\n001,0,root\n003,,other'));
 const result=stageMembers(bundle,target);assert.equal(result.records,3);assert.equal(result.edges,1);assert.equal(result.roots,2);assert.equal(result.liveUsersImported,false);assert.throws(()=>stageMembers(bundle,target),/TARGET_MUST_NOT_EXIST/);
 }finally{rmSync(dir,{recursive:true,force:true})}
});
