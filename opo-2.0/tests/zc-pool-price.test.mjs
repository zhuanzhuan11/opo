import test from 'node:test';
import assert from 'node:assert/strict';
import {fetchZcUsdtSpotPrice,ZC_USDT_POOL_CONFIG} from '../frontend/assets/zc-pool-price.mjs';

const pair='0x1234567890abcdef1234567890abcdef12345678';
const pad=value=>BigInt(value).toString(16).padStart(64,'0');
const addressWord=value=>value.slice(2).toLowerCase().padStart(64,'0');
const response=result=>({ok:true,json:async()=>({jsonrpc:'2.0',id:1,result})});

test('reads and validates a BSC PancakeSwap V2 reserve ratio',async()=>{
 const calls=[];
 const fetcher=async(_endpoint,request)=>{
  const {method,params}=JSON.parse(request.body);calls.push(method);
  if(method==='eth_chainId')return response('0x38');
  if(method==='eth_blockNumber')return response('0x1234');
  if(method==='eth_getCode')return response('0x6001');
  if(method==='eth_call'){
   const {to,data}=params[0];
   if(to===ZC_USDT_POOL_CONFIG.factory)return response('0x'+pair.slice(2).padStart(64,'0'));
   if(to===pair&&data==='0x0dfe1681')return response('0x'+addressWord(ZC_USDT_POOL_CONFIG.zc));
   if(to===pair&&data==='0xd21220a7')return response('0x'+addressWord(ZC_USDT_POOL_CONFIG.usdt));
   if(to===pair&&data==='0x0902f1ac')return response('0x'+pad(10n**18n)+pad(20n*10n**18n)+pad(1));
   if(to===ZC_USDT_POOL_CONFIG.zc)return response('0x'+pad(18));
   if(to===ZC_USDT_POOL_CONFIG.usdt)return response('0x'+pad(18));
  }
  throw Error(`unexpected RPC ${method}`);
 };
 const quote=await fetchZcUsdtSpotPrice({fetcher});
 assert.equal(quote.price,20);
 assert.equal(quote.pair,pair);
 assert.equal(quote.block,'4660');
 assert.ok(calls.includes('eth_chainId'));
});

test('fails closed when PancakeSwap has no configured ZC/USDT pool',async()=>{
 const fetcher=async(_endpoint,request)=>{
  const {method,params}=JSON.parse(request.body);
  if(method==='eth_chainId')return response('0x38');
  if(method==='eth_call'&&params[0].to===ZC_USDT_POOL_CONFIG.factory)return response('0x'+pad(0));
  throw Error(`unexpected RPC ${method}`);
 };
 await assert.rejects(fetchZcUsdtSpotPrice({fetcher}),/no ZC\/USDT pool/);
});
