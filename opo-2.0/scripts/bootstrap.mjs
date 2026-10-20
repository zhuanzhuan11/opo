import {openDatabase,transaction} from '../backend/database.mjs';
import {Domain,passwordHash,id,text} from '../backend/domain.mjs';

const db=openDatabase(process.env.OPO_DATABASE),d=new Domain(db);
const additional=process.argv.includes('--additional-admin');
if(additional&&!process.env.OPO_ADMIN_USER)throw Error('OPO_ADMIN_USER is required for an additional administrator');
if(!additional&&d.one("SELECT id FROM users WHERE role='admin'")){console.log('Administrator already exists. No changes.');db.close();process.exit(0)}
if(!process.env.OPO_ADMIN_PASSWORD){console.error('Set OPO_ADMIN_PASSWORD in your terminal environment (12–128 characters), then run this command again. Never save it in source files.');db.close();process.exit(1)}
const username=text(process.env.OPO_ADMIN_USER||'owner',3,32).toLowerCase();if(!/^[a-z0-9_]+$/.test(username))throw Error('Invalid username');
if(d.one('SELECT id FROM users WHERE username=?',username))throw Error('Account exists; no password or role was changed');
transaction(db,()=>{const uid=id();d.run('INSERT INTO users VALUES(?,?,?,?,?,?,?)',uid,username,'OPO Administrator',passwordHash(process.env.OPO_ADMIN_PASSWORD),'admin',null,Date.now());d.audit('local-operator','admin.bootstrap',uid,{additional})});
console.log('Administrator created:',username);db.close();

