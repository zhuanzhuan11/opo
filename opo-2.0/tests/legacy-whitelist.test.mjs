import test from 'node:test';import assert from 'node:assert/strict';import {SCALE} from '../frontend/assets/model-math.mjs';import {whitelistQuote,transferLegacyWhitelist} from '../frontend/assets/legacy-whitelist.mjs';
test('legacy eligibility adds a transferable 300 base to personal spendable holdings without crediting points',()=>{
 const a=whitelistQuote(0,24,240000,.01,true),b=whitelistQuote(5000*SCALE,24,240000,.01,true),c=whitelistQuote(10000*SCALE,24,240000,.01,true);
 assert.equal(a.tier,'legacy');assert.equal(a.weight,7200);assert.equal(a.basisOPOC,300);assert.equal(b.basisOPOC,5300);assert.equal(c.basisOPOC,10300);assert.equal(b.weight,5300*24);assert.ok(a.rewardUSDT<b.rewardUSDT);assert.ok(b.rewardUSDT<c.rewardUSDT);
 assert.equal(whitelistQuote(1000*SCALE,24,240000,.01,true).basisOPOC,1300);
 assert.equal(whitelistQuote(0,0,0,.01,true).reward,0);assert.throws(()=>whitelistQuote(NaN,24,1,.01,true));
 const n=whitelistQuote(5000*SCALE,24,240000,.01,false);assert.equal(n.weight,120000);assert.equal(n.basisOPOC,5000);assert.equal(whitelistQuote(4999*SCALE,24,240000,.01,false).weight,0);
});
test('legacy transfer moves eligibility only, removes sender entitlement and refuses duplicates',()=>{
 const a={id:'A',legacyWhitelist:true,ledger:{cash:500,grants:[],used:10},earnedRewards:42},b={id:'B',ledger:{cash:100,grants:[],used:1},earnedRewards:3};const original=JSON.stringify([a.ledger,b.ledger,a.earnedRewards,b.earnedRewards]);
 transferLegacyWhitelist(a,b,'T1',100);assert.equal(a.legacyWhitelist,false);assert.equal(b.legacyWhitelist,true);assert.equal(JSON.stringify([a.ledger,b.ledger,a.earnedRewards,b.earnedRewards]),original);assert.equal(a.whitelistTransfers.length,1);assert.equal(b.whitelistTransfers.length,1);
 assert.throws(()=>transferLegacyWhitelist(a,b,'T1',100));assert.throws(()=>transferLegacyWhitelist(b,b,'self',100));assert.throws(()=>transferLegacyWhitelist(b,null,'missing',100));assert.equal(b.legacyWhitelist,true);
 transferLegacyWhitelist(b,a,'T2',101);assert.equal(a.legacyWhitelist,true);assert.equal(b.legacyWhitelist,false);
});
