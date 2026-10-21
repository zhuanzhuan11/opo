// Preview only. No wallet transactions or production price fallback.
export const PAYMENT_METHODS=Object.freeze(['usdt','usdt-opoc','zc','zc-opoc']);
export function priceSnapshot(text){
 if(!/^\d+(\.\d{1,6})?$/.test(String(text)))throw Error('示例ZC价格最多六位小数');
 const [a,b='']=String(text).split('.'),value=Number(a)*1000000+Number(b.padEnd(6,'0'));
 if(!Number.isSafeInteger(value)||value<1||value>1000000000000)throw Error('请输入有效的示例ZC价格');
 return value;
}
export function paymentQuote(cashCents,method,rateText){
 if(!PAYMENT_METHODS.includes(method)||!Number.isSafeInteger(cashCents)||cashCents<0)throw Error('无效的付款方式或金额');
 if(!method.startsWith('zc'))return {paymentCurrency:'USDT',paymentAmountMicro:cashCents*10000,zcPriceMicro:null,priceSource:'USDT',simulation:true};
 const rate=priceSnapshot(rateText),amount=Number((BigInt(cashCents)*10000000000n+BigInt(rate)-1n)/BigInt(rate));
 if(!Number.isSafeInteger(amount))throw Error('ZC数量超出模拟范围');
 return {paymentCurrency:'ZC',paymentAmountMicro:amount,zcPriceMicro:rate,priceSource:'手工示例，LP / Diswap待接入',simulation:true};
}
export function commissionPayment(order,commissionCents){
 if(order.paymentCurrency!=='ZC')return {currency:'USDT',amountMicro:commissionCents*10000};
 if(!Number.isSafeInteger(order.zcPriceMicro)||order.zcPriceMicro<=0||!Number.isSafeInteger(order.paymentAmountMicro))throw Error('订单缺少有效冻结ZC报价');
 const amountMicro=Number(BigInt(commissionCents)*10000000000n/BigInt(order.zcPriceMicro));
 if(!Number.isSafeInteger(amountMicro)||amountMicro>order.paymentAmountMicro)throw Error('无效的ZC佣金');
 return {currency:'ZC',amountMicro};
}
export const formatPayment=(order,amount=order.paymentAmountMicro)=>order.paymentCurrency==='ZC'?(amount/1000000).toFixed(6)+' ZC':((amount??order.cashCents*10000)/1000000).toFixed(2)+' USDT';
