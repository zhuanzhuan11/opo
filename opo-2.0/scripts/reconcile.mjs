import {openDatabase} from '../backend/database.mjs';
import {Domain} from '../backend/domain.mjs';
import {reconcile} from '../backend/reconcile.mjs';
import {existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {root} from '../backend/database.mjs';
const path=resolve(process.env.OPO_DATABASE||resolve(root,'database/runtime/opo.db'));
if(!existsSync(path))throw Error('DATABASE_NOT_FOUND: refusing to create a new empty database for reconciliation');
const db=openDatabase(path);try{const result=reconcile(new Domain(db,{sandbox:process.env.OPO_MODE!=='production'}));console.log(JSON.stringify(result,null,2));if(!result.ok)process.exitCode=1}finally{db.close()}
