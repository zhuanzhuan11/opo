const ZC='0x231bde6480345804679882c8349497a3eeba7905';
const USDT='0x55d398326f99059fF775485246999027B3197955'.toLowerCase();
// PancakeSwap V2 BSC mainnet factory. The pair is resolved on-chain each time,
// so a zero address or a token mismatch fails closed instead of using a sample price.
const FACTORY='0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73';
const RPCS=['https://bsc-rpc.publicnode.com','https://bsc-dataseed.binance.org/'];
const wordAddress=address=>address.slice(2).toLowerCase().padStart(64,'0');
const fromWord=(data,index)=>BigInt('0x'+data.slice(2+index*64,2+(index+1)*64));
const fromAddress=data=>'0x'+data.slice(-40).toLowerCase();
const decimalCall='0x313ce567',token0Call='0x0dfe1681',token1Call='0xd21220a7',reservesCall='0x0902f1ac';

async function makeRpc(endpoint,fetcher,method,params,signal){
 const response=await fetcher(endpoint,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({jsonrpc:'2.0',id:1,method,params}),signal});
 if(!response.ok)throw Error(`BSC RPC HTTP ${response.status}`);
 const payload=await response.json();
 if(payload.error||typeof payload.result!=='string')throw Error(payload.error?.message||'BSC RPC returned an invalid response');
 return payload.result;
}

async function readOn(endpoint,fetcher,signal){
 const chainId=await makeRpc(endpoint,fetcher,'eth_chainId',[],signal);
 if(BigInt(chainId)!==56n)throw Error('RPC is not BSC mainnet');
 const getPair='0xe6a43905'+wordAddress(ZC)+wordAddress(USDT);
 const pair=fromAddress(await makeRpc(endpoint,fetcher,'eth_call',[{to:FACTORY,data:getPair},'latest'],signal));
 if(pair==='0x0000000000000000000000000000000000000000')throw Error('PancakeSwap V2 has no ZC/USDT pool for the configured token');
 const [code,t0Hex,t1Hex,reserves,zcDecimalsHex,usdtDecimalsHex,block]=await Promise.all([
  makeRpc(endpoint,fetcher,'eth_getCode',[pair,'latest'],signal),
  makeRpc(endpoint,fetcher,'eth_call',[{to:pair,data:token0Call},'latest'],signal),
  makeRpc(endpoint,fetcher,'eth_call',[{to:pair,data:token1Call},'latest'],signal),
  makeRpc(endpoint,fetcher,'eth_call',[{to:pair,data:reservesCall},'latest'],signal),
  makeRpc(endpoint,fetcher,'eth_call',[{to:ZC,data:decimalCall},'latest'],signal),
  makeRpc(endpoint,fetcher,'eth_call',[{to:USDT,data:decimalCall},'latest'],signal),
  makeRpc(endpoint,fetcher,'eth_blockNumber',[],signal)
 ]);
 if(code==='0x'||code==='0x0')throw Error('Resolved PancakeSwap pair has no contract code');
 const token0=fromAddress(t0Hex),token1=fromAddress(t1Hex);
 if(!([token0,token1].includes(ZC)&&[token0,token1].includes(USDT)&&token0!==token1))throw Error('Pair tokens do not match the configured ZC and USDT');
 if(reserves.length<194)throw Error('Pair returned malformed reserves');
 const reserve0=fromWord(reserves,0),reserve1=fromWord(reserves,1);
 const zcDecimals=Number(BigInt(zcDecimalsHex)),usdtDecimals=Number(BigInt(usdtDecimalsHex));
 if(zcDecimals>36||usdtDecimals>36||reserve0===0n||reserve1===0n)throw Error('Pool has invalid decimals or no liquidity');
 const zcReserve=token0===ZC?reserve0:reserve1,usdtReserve=token0===USDT?reserve0:reserve1;
 const price=(Number(usdtReserve)/10**usdtDecimals)/(Number(zcReserve)/10**zcDecimals);
 if(!Number.isFinite(price)||price<=0)throw Error('Pool price is invalid');
 return {price,pair,block:BigInt(block).toString(),source:'PancakeSwap V2 BSC ZC/USDT reserves',at:new Date().toISOString()};
}

export async function fetchZcUsdtSpotPrice({fetcher=globalThis.fetch,signal}={}){
 if(typeof fetcher!=='function')throw Error('Browser fetch is unavailable');
 const failures=[];
 for(const endpoint of RPCS){try{const timeout=AbortSignal.timeout(8000),requestSignal=signal?AbortSignal.any([signal,timeout]):timeout;return await readOn(endpoint,fetcher,requestSignal)}catch(error){failures.push(error.message||String(error))}}
 throw Error(failures.find(message=>message.includes('no ZC/USDT pool'))||failures.at(-1)||'Unable to read BSC LP price');
}

export const ZC_USDT_POOL_CONFIG=Object.freeze({zc:ZC,usdt:USDT,factory:FACTORY,chainId:56});
