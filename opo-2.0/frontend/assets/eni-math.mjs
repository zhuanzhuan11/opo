const MICRO=1000000n;
const RELEASE_DAYS=365;

export function eniQuote(value,price,days,startDate='2026-10-20'){
 if(!Number.isFinite(value)||value<=0||value>1e9||!Number.isFinite(price)||price<0.000001||price>1e6||!Number.isInteger(days)||days<0||days>RELEASE_DAYS||!/^\d{4}-\d{2}-\d{2}$/.test(startDate))throw Error('invalid');
 const start=Date.parse(`${startDate}T00:00:00.000Z`);
 if(!Number.isFinite(start)||new Date(start).toISOString().slice(0,10)!==startDate)throw Error('invalid');
 const totalMicro=BigInt(Math.round(value*2*Number(MICRO))),elapsed=BigInt(days);
 const releasedMicro=totalMicro*elapsed/BigInt(RELEASE_DAYS),rows=[];
 let previous=0n;
 for(let day=1;day<=RELEASE_DAYS;day++){
  const cumulative=totalMicro*BigInt(day)/BigInt(RELEASE_DAYS),amount=cumulative-previous;
  rows.push({day,date:new Date(start+day*86400000).toISOString().slice(0,10),amountMicro:Number(amount),cumulativeMicro:Number(cumulative),released:day<=days});
  previous=cumulative;
 }
 return {burn:value/price,total:Number(totalMicro)/Number(MICRO),released:Number(releasedMicro)/Number(MICRO),future:Number(totalMicro-releasedMicro)/Number(MICRO),rows};
}
