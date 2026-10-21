import {commissionPayment} from './product-payment.mjs';
function integer(value){if(!Number.isSafeInteger(value)||value<0)throw Error('无效的分佣金额或比例');return value}
export function commissionRate(text){if(!/^\d+(\.\d{1,2})?$/.test(String(text)))throw Error('分佣比例须为0至100，最多两位小数');const [a,b='']=String(text).split('.'),rate=Number(a)*100+Number(b.padEnd(2,'0'));if(!Number.isSafeInteger(rate)||rate>10000)throw Error('分佣比例须为0至100，最多两位小数');return rate}
export function commissionQuote(order){const cash=integer(order.cashCents),refund=integer(order.refunded?cash:(order.refundedCashCents??0)),rate=integer(order.productReferral?.rateBps??0);if(refund>cash||rate>10000)throw Error('无效的分佣金额或比例');const netCashCents=cash-refund,commissionCents=Number(BigInt(netCashCents)*BigInt(rate)/10000n);return {netCashCents,commissionCents,merchantCashCents:netCashCents-commissionCents}}
export function settleCommission(order,recipient){
 if(order.commissionSettlement)throw Error('该订单分佣已结算');
 if(order.refunded)throw Error('已退款订单不能结算');
 if(order.commissionMode==='on-payment'){if(!order.paymentConfirmed||!order.nonRefundable)throw Error('即时分佣须付款成功并确认不可退款')}else if(order.commissionMode==='after-acceptance'){if(!order.completed)throw Error('客户确认交易后才能结算')}else if(!order.completed||!order.afterSaleClosed)throw Error('订单完成且售后结束后才能结算');
 const q=commissionQuote(order),rule=order.productReferral;
 if(!rule?.recipientId||recipient?.id!==rule.recipientId)throw Error('推荐会员ID无效');
 const payout=commissionPayment(order,q.commissionCents),field=payout.currency==='ZC'?'zc':'cash',increment=payout.currency==='ZC'?payout.amountMicro:q.commissionCents;const next=integer(recipient.ledger[field]??0)+increment;integer(next);
 const record={...q,...payout,recipientId:rule.recipientId,rateBps:rule.rateBps,ruleVersion:rule.version,orderId:order.id};
 recipient.ledger[field]=next;order.commissionSettlement=record;return record;
}
export function transferReferralRights(products,senderId,recipientId,version){
 for(const product of products){const rule=product.productReferral;if(rule?.recipientId===senderId&&rule.qualificationSource==='legacy')product.productReferral=Object.freeze({...rule,recipientId,ownerId:rule.ownerId===senderId?recipientId:rule.ownerId,version})}
}

export function assertRefundable(order){if(order?.commissionMode==='on-payment'||order?.nonRefundable)throw Error('此订单选择付款即分佣，付款前已确认不可退款');if(order?.commissionSettlement)throw Error('已结算佣金的订单暂不支持退款');return true}

