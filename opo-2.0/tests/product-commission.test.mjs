import test from 'node:test';import assert from 'node:assert/strict';import {commissionRate,commissionQuote,settleCommission} from '../frontend/assets/product-commission.mjs';
import {transferReferralRights} from '../frontend/assets/product-commission.mjs';
test('legacy qualification transfers future product referrals without rewriting paid order snapshots',()=>{const old=Object.freeze({recipientId:'A',ownerId:'A',rateBps:1000,qualificationSource:'legacy',version:'v1'}),product={productReferral:old},order={productReferral:old};transferReferralRights([product],'A','B','transfer-v2');assert.equal(product.productReferral.recipientId,'B');assert.equal(product.productReferral.ownerId,'B');assert.equal(order.productReferral.recipientId,'A');assert.equal(order.productReferral.version,'v1')});
test('product commission uses only net actual USDT and conserves merchant plus referral amounts',()=>{
 assert.equal(commissionRate('12.34'),1234);for(const x of ['-1','100.01','1.001','1e2'])assert.throws(()=>commissionRate(x));
 const order={id:'A',cashCents:3950,pointCents:1000,productReferral:{rateBps:1000,recipientId:'R',version:'v1'}};assert.deepEqual(commissionQuote(order),{netCashCents:3950,commissionCents:395,merchantCashCents:3555});
 order.refundedCashCents=950;assert.equal(commissionQuote(order).commissionCents,300);order.refunded=true;assert.equal(commissionQuote(order).commissionCents,0);
 for(const cash of [1,3,101,3950])for(const rateBps of [0,3333,10000]){const q=commissionQuote({cashCents:cash,productReferral:{rateBps}});assert.equal(q.commissionCents+q.merchantCashCents,cash)}
});
test('completion, aftersales, recipient, snapshot and replay protection gate commission credits',()=>{
 const order={id:'A',cashCents:3950,productReferral:Object.freeze({rateBps:1000,recipientId:'R',version:'v1'})},r={id:'R',ledger:{cash:0}};
 assert.throws(()=>settleCommission(order,r));order.completed=true;assert.throws(()=>settleCommission(order,r));order.afterSaleClosed=true;assert.throws(()=>settleCommission(order,{id:'X',ledger:{cash:0}}));assert.equal(r.ledger.cash,0);
 settleCommission(order,r);assert.equal(r.ledger.cash,395);assert.equal(order.commissionSettlement.ruleVersion,'v1');assert.throws(()=>settleCommission(order,r));assert.equal(r.ledger.cash,395);
 assert.throws(()=>settleCommission({...order,commissionSettlement:null,refunded:true},r));
});
