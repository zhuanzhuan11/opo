import test from 'node:test';import assert from 'node:assert/strict';
import {transferPoints} from '../frontend/assets/opoc-transfer.mjs';
import {SCALE,pointBalance,cityTierPreview} from '../frontend/assets/model-math.mjs';
test('internal OPOC transfers conserve released points, do not move cash and cannot replay',()=>{
 const a={id:'A',ledger:{cash:100,used:0,grants:[{start:0,totalMicro:10000*SCALE}],transfers:[],orders:[{paymentConfirmed:true,completed:true,refunded:false,cashCents:100,pointCents:0}]}},b={id:'B',ledger:{cash:200,used:0,grants:[],transfers:[],orders:[{paymentConfirmed:true,completed:true,refunded:false,cashCents:100,pointCents:0}]}};
 transferPoints(a,b,'5000.0001',365,'T1');
 assert.equal(pointBalance(a.ledger.grants,365,a.ledger.used),4999.9999*SCALE);
 assert.equal(pointBalance(b.ledger.grants,365,0),5000.0001*SCALE);
 assert.equal(cityTierPreview(pointBalance(a.ledger.grants,365,a.ledger.used)),'none');
 assert.deepEqual([a.ledger.cash,b.ledger.cash],[100,200]);
 const snapshot=JSON.stringify([a,b]);
 for(const amount of ['0','-1','1.00001','1e3','9007199254740992'])assert.throws(()=>transferPoints(a,b,amount,365,'bad'));
 assert.throws(()=>transferPoints(a,b,'1',365,'T1'));assert.throws(()=>transferPoints(a,a,'1',365,'self'));assert.throws(()=>transferPoints(a,null,'1',365,'missing'));assert.throws(()=>transferPoints(a,b,'6000',365,'over'));
 assert.equal(JSON.stringify([a,b]),snapshot);
 transferPoints(b,a,'0.0001',365,'T2');assert.equal(pointBalance(a.ledger.grants,365,a.ledger.used),5000*SCALE);
 assert.equal(a.ledger.transfers.length,2);assert.equal(b.ledger.transfers.length,2);
});
test('locked OPOC cannot be transferred',()=>{const a={id:'A',ledger:{used:0,grants:[{start:0,totalMicro:100*SCALE}],transfers:[]}},b={id:'B',ledger:{used:0,grants:[]}};assert.throws(()=>transferPoints(a,b,'1',0,'locked'));assert.equal(a.ledger.used,0);assert.equal(b.ledger.grants.length,0)});

test('OPOC cannot be transferred to a member without a completed, non-refunded product order',()=>{const a={id:'A',ledger:{used:0,grants:[{start:0,totalMicro:100*SCALE}],transfers:[]}},b={id:'B',ledger:{used:0,grants:[],transfers:[],orders:[]}};assert.throws(()=>transferPoints(a,b,'1',365,'T3'),/已完成且未退款商品购买/);assert.equal(a.ledger.used,0);assert.equal(b.ledger.grants.length,0)});
