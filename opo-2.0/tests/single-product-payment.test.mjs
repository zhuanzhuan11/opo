import test from 'node:test';
import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';

const moduleUrl=new URL('../frontend/assets/product-payment.mjs',import.meta.url);
const payment=existsSync(moduleUrl)?await import(moduleUrl):{};

test('the pilot product quotes ZC, ZC plus OPOC, USDT and USDT plus OPOC',()=>{
 assert.equal(typeof payment.quoteProductPayment,'function');
 const available=100_000_000;
 assert.deepEqual(payment.quoteProductPayment(5500,available,'zc','0','0.02'),{
  method:'zc',pointCents:0,cashCents:5500,paymentCurrency:'ZC',paymentAmountMicro:2_750_000_000,zcPriceMicro:20_000,simulation:true
 });
 assert.deepEqual(payment.quoteProductPayment(5500,available,'zc-opoc','20','0.02'),{
  method:'zc-opoc',pointCents:2000,cashCents:3500,paymentCurrency:'ZC',paymentAmountMicro:1_750_000_000,zcPriceMicro:20_000,simulation:true
 });
 assert.deepEqual(payment.quoteProductPayment(5500,available,'usdt','0',''),{
  method:'usdt',pointCents:0,cashCents:5500,paymentCurrency:'USDT',paymentAmountMicro:55_000_000,zcPriceMicro:null,simulation:true
 });
 assert.deepEqual(payment.quoteProductPayment(5500,available,'usdt-opoc','20',''),{
  method:'usdt-opoc',pointCents:2000,cashCents:3500,paymentCurrency:'USDT',paymentAmountMicro:35_000_000,zcPriceMicro:null,simulation:true
 });
});

test('the pilot keeps OPOC below half and fails closed on invalid ZC prices',()=>{
 assert.equal(typeof payment.quoteProductPayment,'function');
 assert.equal(payment.quoteProductPayment(5500,100_000_000,'zc-opoc','27.49','0.02').pointCents,2749);
 assert.throws(()=>payment.quoteProductPayment(5500,100_000_000,'zc-opoc','27.50','0.02'),/积分数量超出本单可用上限/);
 assert.throws(()=>payment.quoteProductPayment(5500,100_000_000,'zc','0','0'),/有效的示例ZC价格/);
 assert.throws(()=>payment.quoteProductPayment(5500,100_000_000,'wallet','0','0.02'),/无效的付款方式/);
});

test('every product form presents the four approved methods in the requested order',()=>{
 assert.equal(typeof payment.renderProductPaymentForm,'function');
 for(const name of ['OPO 无线蓝牙耳机','OPO 家伴服务']){
  const html=payment.renderProductPaymentForm({name,priceCents:5500,availableMicro:100_000_000});
  const values=[...html.matchAll(/<option value="([^"]+)"/g)].map(match=>match[1]);
  assert.deepEqual(values,['zc','zc-opoc','usdt','usdt-opoc']);
  assert.match(html,new RegExp(`当前商品：${name}`));
  assert.match(html,/全部商品使用相同四种组合付款/);
  assert.match(html,/确认模拟支付/);
 }
});
