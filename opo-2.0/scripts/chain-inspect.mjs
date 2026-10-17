// Read-only. No wallet/private key, eth_sendTransaction or upgrade operation.
import {writeFileSync,mkdirSync} from 'node:fs';
import {resolve} from 'node:path';
const rpc=process.env.OPO_RPC_URL,address=process.env.OPO_ZC_ADDRESS;
if(!rpc||!/^https:\/\//.test(rpc)||!/^0x[0-9a-f]{40}$/i.test(address||''))throw Error('Set HTTPS OPO_RPC_URL and public OPO_ZC_ADDRESS');
let sequence=0;
async function call(method,params=[]){const response=await fetch(rpc,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({jsonrpc:'2.0',id:++sequence,method,params}),signal:AbortSignal.timeout(15000)});if(!response.ok)throw Error('RPC_HTTP_FAILURE');const data=await response.json();if(data.error||!('result' in data))throw Error('RPC_CALL_FAILURE: '+method);return data.result}
const slots={implementation:'0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc',admin:'0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103',beacon:'0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50'};
const chainId=Number(BigInt(await call('eth_chainId'))),block=await call('eth_blockNumber');
const code=await call('eth_getCode',[address,block]);if(code==='0x')throw Error('ADDRESS_HAS_NO_CONTRACT_ON_SELECTED_CHAIN');
const report={at:new Date().toISOString(),chainId,block,address,codeBytes:(code.length-2)/2,storage:{},token:{},limitations:['Single RPC observation, not an audit or ownership proof','Zero EIP-1967 slots do not prove immutability; custom proxies may exist','Does not verify burn/tax/blacklist behavior or execute upgrades']};
for(const [key,slot] of Object.entries(slots))report.storage[key]=await call('eth_getStorageAt',[address,slot,block]);
for(const [name,data] of Object.entries({decimals:'0x313ce567',totalSupply:'0x18160ddd',owner:'0x8da5cb5b'})){try{report.token[name]=await call('eth_call',[{to:address,data},block])}catch{report.token[name]='unsupported-or-unavailable'}}
if(process.argv[2]){const file=resolve(process.argv[2]);mkdirSync(resolve(file,'..'),{recursive:true});writeFileSync(file,JSON.stringify(report,null,2))}
console.log(JSON.stringify(report,null,2));
