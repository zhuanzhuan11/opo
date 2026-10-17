import {existsSync,readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {root} from '../backend/database.mjs';
const blockers=[
 {id:'CHAIN_PAYMENTS',detail:'Real wallet binding, payment intents, canonical event ingestion, refunds and replay/reorg recovery are not implemented'},
 {id:'CONTRACTS',detail:'No smart contract source, ABI, proxy layout baseline or upgrade authority supplied in this repository'},
 {id:'RESERVES',detail:'Actual USDT backing, ZC vesting inventory and treasury beneficiaries have not been verified'},
 {id:'ORACLE',detail:'Market price/TWAP, liquidity safeguards and exchange limits are not implemented'},
 {id:'BUSINESS_MODULES',detail:'City qualifications, holder distributions, settlement after-sales recovery, full SKU and cost budget controls remain incomplete'},
 {id:'EXTERNAL_SERVICES',detail:'Supplier delivery channels, authorized product sourcing and external AI have not been connected or accepted'},
 {id:'OPERATIONS',detail:'Production infrastructure, remote backups, load/restore tests, monitoring delivery and independent review lack production evidence'}
];
const report={version:JSON.parse(readFileSync(resolve(root,'package.json'))).version,ready:false,canAcceptRealFunds:false,blockers,notes:['This command does not waive a blocker based on environment flags or manually checked boxes','A successful sandbox test is not production acceptance'],localConfig:{httpsOrigin:process.env.OPO_ORIGIN?.startsWith('https://')||false,mfaEncryptionKeyConfigured:/^[a-f0-9]{64}$/i.test(process.env.OPO_MFA_KEY||''),contractsDirectoryExists:existsSync(resolve(root,'contracts'))}};
console.log(JSON.stringify(report,null,2));process.exitCode=1;
