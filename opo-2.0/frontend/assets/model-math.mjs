export const SCALE=1000000;
export function cents(value){if(!/^\d+(\.\d{1,2})?$/.test(String(value)))throw Error('金额最多两位小数');const [a,b='']=String(value).split('.');const n=Number(a)*100+Number(b.padEnd(2,'0'));if(!Number.isSafeInteger(n)||n>1000000000)throw Error('金额超出测试范围');return n}
export function priceFor(costCents,multiplier){if(!Number.isSafeInteger(costCents)||costCents<0||!Number.isInteger(multiplier)||multiplier<25000||multiplier>30000)throw Error('成本须非负，倍率须在2.5至3之间');return Number((BigInt(costCents)*BigInt(multiplier)+9999n)/10000n)}
export function releasedMicro(grant,day){const days=Math.max(0,Math.min(365,day-grant.start));return Number(BigInt(grant.totalMicro)*BigInt(days)/365n)}
export function pointBalance(grants,day,usedMicro=0){return Math.max(0,grants.reduce((n,g)=>n+releasedMicro(g,day),0)-usedMicro)}
export function purchaseRights(cashCents){if(!Number.isSafeInteger(cashCents)||cashCents<5000||cashCents>200000000)throw Error('认购测试金额50 USDT起，单次不超过剩余额度');return {burnZC:cashCents,totalMicro:cashCents*20000}}
export function checkoutQuote(priceCents,availableMicro,usePoints,requestedPointCents){
 if(!Number.isSafeInteger(priceCents)||priceCents<0||!Number.isSafeInteger(availableMicro)||availableMicro<0)throw Error('无效的结算金额');
 const maxPointCents=Math.min(Math.max(0,Math.ceil(priceCents/2)-1),Math.floor(availableMicro/10000));
 const pointCents=usePoints?(requestedPointCents??maxPointCents):0;
 if(!Number.isSafeInteger(pointCents)||pointCents<0||pointCents>maxPointCents)throw Error('积分数量超出本单可用上限');
 return {pointCents,cashCents:priceCents-pointCents};
}
export function lpAccrue(state,day){if(day<state.day||day>1095)throw Error('测试时间不能倒退');if(state.user>0){state.earned+=(day-state.day)*(100000000/1095)*state.user/(state.other+state.user)}state.day=day;return state}
export function formatToken(hex,decimals=18){if(!/^0x[0-9a-f]{1,64}$/i.test(hex))throw Error('钱包返回了无效余额');const v=BigInt(hex),base=10n**BigInt(decimals);return (v/base).toString()+'.'+(v%base).toString().padStart(decimals,'0').slice(0,4)}

export const ZC_ALLOCATION=Object.freeze({initialLP:1000000,subscription:200000000,legacyNodes:100000000,lpReserve:549000000,lpRewards:100000000,cityRewards:50000000});
export function cityTierPreview(balanceMicro){if(!Number.isSafeInteger(balanceMicro)||balanceMicro<0||balanceMicro>1000000000*SCALE)throw Error('请输入有效的模拟OPOC持有量');return balanceMicro>=10000*SCALE?'provider':balanceMicro>=5000*SCALE?'whitelist':'none'}

export const CITY_REWARD_USDT_BUDGET=500000;
export function cityDailyPreview(balanceMicro,hours,otherOPOCHours,zcPrice=.01){if(!Number.isFinite(zcPrice)||zcPrice<0.000001||zcPrice>1000000)throw Error('请输入有效的城市奖励模拟ZC价格');const tier=cityTierPreview(balanceMicro);if(!Number.isFinite(hours)||hours<0||hours>24||!Number.isFinite(otherOPOCHours)||otherOPOCHours<0||otherOPOCHours>24000000000)throw Error('请输入有效的日内持有小时和其他合格用户权重');const weight=tier==='none'?0:balanceMicro/SCALE*hours,totalWeight=weight+otherOPOCHours,poolDailyUSDT=CITY_REWARD_USDT_BUDGET/1095,poolDaily=poolDailyUSDT/zcPrice,share=totalWeight?weight/totalWeight:0,rewardUSDT=poolDailyUSDT*share;return {tier,weight,totalWeight,poolDailyUSDT,poolDaily,share,rewardUSDT,reward:rewardUSDT/zcPrice}}

export function legacyNodePreview(investmentCents,days,zcPrice){if(!Number.isSafeInteger(investmentCents)||investmentCents<100000||investmentCents>1000000000||investmentCents%100000!==0)throw Error('请按1,000 USDT的整份投资输入；零散投资处理待核定');if(!Number.isInteger(days)||days<1||days>1095||!Number.isFinite(zcPrice)||zcPrice<0.000001||zcPrice>1000000)throw Error('请输入有效的释放天数和模拟ZC价格');const shares=investmentCents/100000,totalUSDT=investmentCents/100*1.5,releaseUSDT=totalUSDT*days/1095;return {shares,totalUSDT,releaseUSDT,zc:releaseUSDT/zcPrice}}
