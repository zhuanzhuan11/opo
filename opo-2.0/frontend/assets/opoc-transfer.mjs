import {SCALE,pointBalance} from './model-math.mjs';
export function transferPoints(sender,recipient,amount,day,id){
 if(!sender||!recipient||sender.id===recipient.id)throw Error('请填写其他已注册会员的内部ID');
 if(!/^\d+(\.\d{1,4})?$/.test(String(amount)))throw Error('转账数量须大于0，最多四位小数');
 const [whole,fraction='']=String(amount).split('.'),micro=Number(BigInt(whole)*BigInt(SCALE)+BigInt(fraction.padEnd(6,'0')));
 if(!Number.isSafeInteger(micro)||micro<=0)throw Error('转账数量须大于0，最多四位小数');
 const a=sender.ledger,b=recipient.ledger;
 if(pointBalance(a.grants,day,a.used)<micro)throw Error('可用OPOC不足，待释放积分不能转账');
 if(a.transfers?.some(t=>t.id===id)||b.transfers?.some(t=>t.id===id))throw Error('该转账已处理，请勿重复提交');
 const recipientTotal=b.grants.reduce((n,g)=>n+g.totalMicro,0);
 if(!Number.isSafeInteger(recipientTotal+micro)||recipientTotal+micro>1000000000*SCALE)throw Error('收款积分超出模拟范围');
 const record={id,from:sender.id,to:recipient.id,micro,day};
 a.used+=micro;b.grants.push({id,start:day-365,totalMicro:micro,burnZC:0,source:'transfer'});
 (a.transfers??=[]).unshift(record);(b.transfers??=[]).unshift(record);return record;
}
