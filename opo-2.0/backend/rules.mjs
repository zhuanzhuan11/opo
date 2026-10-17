import {integer,fail} from './domain.mjs';

export const allocationKeys=['direct','indirect','buyback','lp','platform','holders'];
export const ruleDefaults={direct:500,indirect:300,buyback:500,lp:500,platform:1000,holders:1000,accelerationDirect:300,accelerationIndirect:200,price:10000,settlementHours:168};
export function proportional(value,numerator,denominator=10000){
 integer(value);integer(numerator);integer(denominator,1);
 return integer(Number(BigInt(value)*BigInt(numerator)/BigInt(denominator)));
}
export function validateRules(input,old){
 const r={};
 for(const key of allocationKeys)r[key]=integer(input[key],0,10000);
 if(allocationKeys.reduce((sum,k)=>sum+r[k],0)>10000)fail('ALLOCATION_EXCEEDS_100');
 for(const key of ['accelerationDirect','accelerationIndirect'])r[key]=integer(input[key]??old[key]??ruleDefaults[key],0,10000);
 r.price=old.price;
 r.settlementHours=integer(input.settlementHours,0,720);
 return r;
}
