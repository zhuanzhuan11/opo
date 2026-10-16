import {openDatabase,transaction} from '../backend/database.mjs';
import {Domain,passwordHash,id,text} from '../backend/domain.mjs';
import {createInterface} from 'node:readline/promises';
const db=openDatabase(process.env.OPO_DATABASE),d=new Domain(db);
if(d.one("SELECT id FROM users WHERE role='admin'")){console.log('Administrator already exists. No changes.');db.close();process.exit(0)}
if(!process.env.OPO_ADMIN_PASSWORD){console.error('Set OPO_ADMIN_PASSWORD in your terminal environment (12–128 characters), then run this command again. Never save it in source files.');db.close();process.exit(1)}
const username=text(process.env.OPO_ADMIN_USER||'owner',3,32).toLowerCase();if(!/^[a-z0-9_]+$/.test(username))throw Error('Invalid username');
transaction(db,()=>{d.run('INSERT INTO users VALUES(?,?,?,?,?,?,?)',id(),username,'OPO Owner',passwordHash(process.env.OPO_ADMIN_PASSWORD),'admin',null,Date.now())});
console.log('Administrator created:',username);db.close();
