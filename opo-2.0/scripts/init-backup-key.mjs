import {randomBytes} from 'node:crypto';
import {mkdirSync,writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
const dir=resolve('.secrets');mkdirSync(dir,{recursive:true,mode:0o700});writeFileSync(resolve(dir,'backup-key'),randomBytes(32).toString('hex'),{flag:'wx',mode:0o600});
console.log('Created .secrets/backup-key without displaying its value. Store an independent encrypted copy; never overwrite the key used by existing backups.');
