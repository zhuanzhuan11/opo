import {cents,checkoutQuote} from './model-math.mjs';

export const PRODUCT_PAYMENT_METHODS=Object.freeze(['zc','zc-opoc','usdt','usdt-opoc']);

function zcPriceMicro(text){
 if(!/^\d+(\.\d{1,6})?$/.test(String(text)))throw Error('示例ZC价格最多六位小数');
 const [whole,fraction='']=String(text).split('.');
 const value=Number(whole)*1_000_000+Number(fraction.padEnd(6,'0'));
 if(!Number.isSafeInteger(value)||value<1||value>1_000_000_000_000)throw Error('请输入有效的示例ZC价格');
 return value;
}

export function quoteProductPayment(priceCents,availableMicro,method,opocText='0',zcPriceText='0.02'){
 if(!PRODUCT_PAYMENT_METHODS.includes(method))throw Error('无效的付款方式');
 const usesOpoc=method.endsWith('-opoc');
 const base=checkoutQuote(priceCents,availableMicro,usesOpoc,usesOpoc?cents(opocText):0);
 if(!method.startsWith('zc'))return {...base,method,paymentCurrency:'USDT',paymentAmountMicro:base.cashCents*10_000,zcPriceMicro:null,simulation:true};
 const rate=zcPriceMicro(zcPriceText);
 const amount=Number((BigInt(base.cashCents)*10_000_000_000n+BigInt(rate)-1n)/BigInt(rate));
 if(!Number.isSafeInteger(amount))throw Error('ZC数量超出模拟范围');
 return {...base,method,paymentCurrency:'ZC',paymentAmountMicro:amount,zcPriceMicro:rate,simulation:true};
}

export function formatProductPayment(quote){
 const tender=quote.paymentCurrency==='ZC'?(quote.paymentAmountMicro/1_000_000).toFixed(6)+' ZC':(quote.cashCents/100).toFixed(2)+' USDT';
 return quote.pointCents?tender+' + '+(quote.pointCents/100).toFixed(2)+' OPOC':tender;
}

export function renderProductPaymentForm({name,priceCents,availableMicro}){
 const maxOpoc=checkoutQuote(priceCents,availableMicro,true).pointCents;
 return `<span class="badge">全部商品四支付测试 · 非真实付款</span><p>当前商品：${name}；全部商品使用相同四种组合付款。</p><div class="line"><span>商品测试价</span><strong>${(priceCents/100).toFixed(2)} USDT</strong></div><label>支付方式<select id="pilot-paymethod"><option value="zc">ZC</option><option value="zc-opoc">ZC＋OPOC</option><option value="usdt">USDT</option><option value="usdt-opoc">USDT＋OPOC</option></select></label><div id="pilot-opoc-fields" hidden><label>本次使用 OPOC<input id="pilot-opoc-amount" type="number" min="0" max="${(maxOpoc/100).toFixed(2)}" step="0.01" value="0"></label><p class="sub">低于商品总价50%；本单最多 ${(maxOpoc/100).toFixed(2)} OPOC。</p></div><div id="pilot-zc-fields"><label>模拟 ZC 价格 / USDT<input id="pilot-zc-price" type="number" min="0.000001" max="1000000" step="0.000001" value="0.02"></label><p class="sub">参考家伴服务的本地模拟价格；未连接真实LP、钱包或报价。</p></div><div id="pilot-payment-quote" class="service-payment-quote" role="status"></div><button id="pilot-confirm-payment" type="button" class="dark wide padded">确认模拟支付</button><p class="sub">本界面不扣款、不生成链上交易，也不连接真实支付。</p>`;
}
