import test from 'node:test';import assert from 'node:assert/strict';import {cityTimeQuote} from '../frontend/assets/city-time.mjs';import {SCALE} from '../frontend/assets/model-math.mjs';
const segment=(start,end,balance,legacy=false,qualified=true)=>({start,end,balanceMicro:balance*SCALE,legacy,qualified});
test('time weights split balance changes and do not credit the closing balance for the whole day',()=>{
 const q=cityTimeQuote([segment(0,12,5000),segment(12,24,10000)],240000,.01);assert.equal(q.weight,180000);assert.equal(q.eligibleHours,24);assert.equal(q.share,180000/420000);
 const half=cityTimeQuote([segment(0,12,5000)],240000,.01),full=cityTimeQuote([segment(0,24,5000)],240000,.01);assert.equal(full.weight,half.weight*2);assert.ok(full.share>half.share);
 assert.equal(cityTimeQuote([segment(0,12,4999),segment(12,24,5000)],0,.01).weight,60000);
 assert.equal(cityTimeQuote([segment(0,12,10000,false,false),segment(12,24,10000)],0,.01).weight,120000);
});
test('legacy base and actual balances count only while eligibility is held; invalid intervals fail',()=>{
 assert.equal(cityTimeQuote([segment(0,12,0,true),segment(12,24,1000,true)],0,.01).weight,19200);
 const sender=cityTimeQuote([segment(0,12,1000,true),segment(12,24,1000,false)],0,.01),receiver=cityTimeQuote([segment(0,12,0,false),segment(12,24,0,true)],0,.01);assert.equal(sender.weight,15600);assert.equal(receiver.weight,3600);
 for(const segments of [[],[segment(0,25,5000)],[segment(10,12,5000),segment(11,24,5000)],[segment(12,12,5000)]])assert.throws(()=>cityTimeQuote(segments,0,.01));
});
