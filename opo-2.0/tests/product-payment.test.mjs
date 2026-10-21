import test from 'node:test';
import assert from 'node:assert/strict';
import {paymentQuote,commissionPayment,priceSnapshot,formatPayment} from '../frontend/assets/product-payment.mjs';
import {settleCommission,assertRefundable,commissionQuote} from '../frontend/assets/product-commission.mjs';
import {checkoutQuote} from '../frontend/assets/model-math.mjs';
test('four tenders use integer ZC quote snapshots and exclude points from commissions',()=>{
 for(const method of ['usdt','usdt-opoc','zc','zc-opoc']){
 const q=checkoutQuote(10000,100000000,method.endsWith('-opoc'),4000),payment=paymentQuote(q.cashCents,method,'0.01');
 const order={id:method,...q,...payment,productReferral:{recipientId:'R',rateBps:1000,version:'v1'},commissionMode:'after-acceptance',completed:true};
 const recipient={id:'R',ledger:{cash:7,zc:11}};const record=settleCommission(order,recipient);
 assert.equal(record.commissionCents,method.endsWith('-opoc')?600:1000);
 if(method.startsWith('zc')){assert.equal(recipient.ledger.cash,7);assert.equal(record.currency,'ZC');assert.equal(recipient.ledger.zc,11+record.commissionCents*1000000);}
 else {assert.equal(recipient.ledger.zc,11);assert.equal(recipient.ledger.cash,7+record.commissionCents);}
 assert.throws(()=>settleCommission(order,recipient));assert.throws(()=>assertRefundable(order));
 }
});
test('ZC payment rounds up, commission rounds down and cannot exceed original tender',()=>{
 for(const price of ['0.000001','0.01','0.03','2.333333','1000000'])for(const cents of [1,3333,10000]){
 const q=paymentQuote(cents,'zc',price);assert.ok(BigInt(q.paymentAmountMicro)*BigInt(q.zcPriceMicro)>=BigInt(cents)*10000000000n);
 const payout=commissionPayment(q,cents);assert.ok(payout.amountMicro<=q.paymentAmountMicro);
 }
});
test('missing or malformed prices fail closed; USDT does not need a ZC price',()=>{
 for(const price of ['',0,-1,'NaN','Infinity','0.0000001','1e-2'])assert.throws(()=>priceSnapshot(price));
 assert.equal(paymentQuote(123,'usdt','').paymentAmountMicro,1230000);
 assert.throws(()=>paymentQuote(123,'wallet','0.01'));
});
test('order freezes original ZC tender and points for full refund, no commission after refund',()=>{
 const q=checkoutQuote(4950,100000000,true,2474),order={...q,...paymentQuote(q.cashCents,'zc-opoc','0.01'),opocBurnedCents:q.pointCents,productReferral:{rateBps:1000}};
 const original=order.paymentAmountMicro;paymentQuote(q.cashCents,'zc-opoc','0.02');
 assert.equal(order.paymentAmountMicro,original);assert.equal(order.pointCents,2474);assert.equal(assertRefundable(order),true);
 order.refunded=true;assert.equal(commissionQuote(order).commissionCents,0);
 assert.throws(()=>checkoutQuote(4950,100000000,true,2475));
 assert.equal(formatPayment({cashCents:123}),'1.23 USDT');
});
