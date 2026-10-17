import {randomBytes} from 'node:crypto';
import {mkdirSync,writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
const dir=resolve('.secrets');mkdirSync(dir,{recursive:true,mode:0o700});
writeFileSync(resolve(dir,'mfa-key'),randomBytes(32).toString('hex'),{flag:'wx',mode:0o600});
console.log('Created .secrets/mfa-key without displaying its value. Store an encrypted off-host backup; do not regenerate for an existing MFA database.');
