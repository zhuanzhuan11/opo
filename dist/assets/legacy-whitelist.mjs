import {SCALE,cityDailyPreview,cityTierPreview} from './model-math.mjs';
export function whitelistQuote(balanceMicro,hours,otherWeight,price,legacy=false){
 if(typeof legacy!=='boolean')throw Error('Invalid legacy eligibility');
 cityTierPreview(balanceMicro);
 const quote=cityDailyPreview(legacy?5000*SCALE:balanceMicro,hours,otherWeight,price);
 if(!legacy)return {...quote,basisOPOC:quote.tier==='none'?0:balanceMicro/SCALE};
 const basisOPOC=300+balanceMicro/SCALE,weight=basisOPOC*hours,totalWeight=weight+otherWeight,share=totalWeight?weight/totalWeight:0,rewardUSDT=quote.poolDailyUSDT*share;
 return {...quote,tier:'legacy',basisOPOC,weight,totalWeight,share,rewardUSDT,reward:rewardUSDT/price};
}
export function transferLegacyWhitelist(sender,recipient,id,day){
 if(!sender?.legacyWhitelist||!recipient||sender===recipient||recipient.legacyWhitelist)throw Error('请选择尚未持有历史白名单的其他会员ID');
 if(sender.whitelistTransfers?.some(t=>t.id===id))throw Error('该资格转让已处理');
 const record={id,from:sender.id,to:recipient.id,day,type:'legacy',weightOPOC:300};
 sender.legacyWhitelist=false;recipient.legacyWhitelist=true;
 (sender.whitelistTransfers??=[]).unshift(record);(recipient.whitelistTransfers??=[]).unshift(record);
 return record;
}
