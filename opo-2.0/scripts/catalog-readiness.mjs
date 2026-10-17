import {DatabaseSync} from 'node:sqlite';
import {existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {root} from '../backend/database.mjs';
import {catalogConfig} from '../backend/catalog.mjs';
import {mfaKeyConfigured} from '../backend/mfa.mjs';
import {validateOrigin} from '../backend/security.mjs';
const config=catalogConfig(),blockers=[];
if(!config.inquiriesEnabled)blockers.push('Configure the real operator name and public support email');
if(!validateOrigin(process.env.OPO_ORIGIN)?.startsWith('https:'))blockers.push('Configure the exact public HTTPS origin');
if(!mfaKeyConfigured())blockers.push('Configure and back up the MFA encryption key');
if(!process.env.OPO_TRUSTED_PROXIES)blockers.push('Configure and verify exact reverse-proxy IP addresses so visitors do not share an inquiry limit');
const path=resolve(process.env.OPO_DATABASE||resolve(root,'database/runtime/opo.db'));let publishedProducts=0;
if(!existsSync(path))blockers.push('Initialize the persistent database and administrator');else{const db=new DatabaseSync(path,{readOnly:true});try{if(db.prepare('PRAGMA integrity_check').get().integrity_check!=='ok')blockers.push('Database integrity check failed');if(db.prepare('SELECT MAX(version) n FROM migrations').get().n<5)blockers.push('Apply the catalog schema migration');else{if(!db.prepare('SELECT user_id FROM admin_mfa').get())blockers.push('Enroll an administrator authenticator');publishedProducts=db.prepare("SELECT COUNT(*) n FROM catalog_products WHERE status='published'").get().n}}catch{blockers.push('Database schema is not initialized')}finally{db.close()}}
const result={mode:'catalog',readyForDeployment:blockers.length===0,liveDeploymentVerified:false,realPaymentsEnabled:false,publishedProducts,blockers,remainingHostAcceptance:['Verify domain/DNS/HTTPS and private database persistence','Verify remote backup and actual restore','Verify operator can see and process a real consented inquiry'],notes:publishedProducts?[]:['No products published; do not substitute demo inventory']};console.log(JSON.stringify(result,null,2));if(blockers.length)process.exitCode=1;
