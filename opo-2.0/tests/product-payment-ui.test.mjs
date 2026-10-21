import test from 'node:test';import assert from 'node:assert/strict';import vm from 'node:vm';import {readFileSync} from 'node:fs';
import {paymentQuote,formatPayment,commissionPayment} from '../frontend/assets/product-payment.mjs';
import {checkoutQuote,cents} from '../frontend/assets/model-math.mjs';
const source=readFileSync(new URL('../frontend/assets/model-preview.js',import.meta.url),'utf8');
const buySource=source.slice(source.indexOf('function buy('),source.indexOf('function bindView('));
test('all 13 product checkout handlers accept four tenders through inline and quick purchase',()=>{
 for(const inline of [false,true])for(let id=0;id<13;id++)for(const method of ['usdt','usdt-opoc','zc','zc-opoc']){
 const nodes=new Map();const $=key=>{if(!nodes.has(key))nodes.set(key,{value:'',checked:false,close(){}});return nodes.get(key)};
 $('#paymethod').value=method;$('#pointamount').value='10';$('#checkoutzcprice').value='0.01';$('#checkout input[name=commissionMode]:checked').value='after-acceptance';
 const state={cash:100000,zc:100000000000,used:0,orders:[]},products=Array.from({length:13},(_,id)=>({id,name:'商品'+id}));
 const context=vm.createContext({$, $$:()=>[],state,products,price:()=>5500,available:()=>100000000,points:x=>String(x/1000000),money:x=>(x/100).toFixed(2),dialog(){},bindCommon(){},checkoutQuote,cents,paymentQuote,formatPayment,commissionPayment,members:new Map(),member:null,crypto:globalThis.crypto,location:{},render(){},toast(){},settleCommission(){throw Error('unexpected settlement')}});
 vm.runInContext(buySource,context);context.buy(id,inline);assert.equal($('#submitcheckout').disabled,false);
 $('#checkout').onsubmit({preventDefault(){}});assert.equal(state.orders.length,1);const order=state.orders[0];assert.equal(order.product,id);assert.equal(order.paymentCurrency,method.startsWith('zc')?'ZC':'USDT');assert.equal(order.pointCents,method.endsWith('-opoc')?1000:0);
 if(method.startsWith('zc')){assert.equal(state.cash,100000);assert.equal(state.zc,100000000000-order.paymentAmountMicro)}else assert.equal(state.zc,100000000000);
 assert.equal(state.used,order.pointCents*10000);
 }
});
test('brand and both product entry points use OPO and the common checkout',()=>{
 const html=readFileSync(new URL('../frontend/model-preview.html',import.meta.url),'utf8');assert.match(html,/<b>OPO<\/b>/);assert.doesNotMatch(html,/OPO NEXUS/);assert.doesNotMatch(source,/OPO NEXUS/);assert.match(source,/buy\(p.id,true\)/);assert.match(source,/buy\(Number\(b.dataset.buy\)\)/);
});
