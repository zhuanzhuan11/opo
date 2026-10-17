// Boundary utilities for future chain adapters. Internal preview precision is
// USDT/OPOC: 2, ZC: 6. On-chain precision must come from verified token metadata.
export function parseUnits(value,decimals){
 if(!Number.isInteger(decimals)||decimals<0||decimals>36)throw Error('INVALID_DECIMALS');
 if(typeof value!=='string'||!/^\d{1,78}(?:\.\d+)?$/.test(value))throw Error('INVALID_ASSET_AMOUNT');
 const [whole,fraction='']=value.split('.');if(fraction.length>decimals)throw Error('ASSET_PRECISION_EXCEEDED');
 return BigInt(whole)*10n**BigInt(decimals)+BigInt(fraction.padEnd(decimals,'0')||'0');
}
export function convertUnitsExact(value,fromDecimals,toDecimals){
 if(typeof value!=='bigint'||value<0n)throw Error('INVALID_ATOMIC_AMOUNT');
 for(const decimals of [fromDecimals,toDecimals])if(!Number.isInteger(decimals)||decimals<0||decimals>36)throw Error('INVALID_DECIMALS');
 if(toDecimals>=fromDecimals)return value*10n**BigInt(toDecimals-fromDecimals);
 const factor=10n**BigInt(fromDecimals-toDecimals);if(value%factor!==0n)throw Error('PRECISION_LOSS_REQUIRES_EXPLICIT_POLICY');return value/factor;
}
export function ledgerInteger(value){if(typeof value!=='bigint'||value<0n||value>BigInt(Number.MAX_SAFE_INTEGER))throw Error('LEDGER_RANGE_EXCEEDED');return Number(value)}
