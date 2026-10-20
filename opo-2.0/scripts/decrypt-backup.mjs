import {decryptBackup} from '../backend/backup-crypto.mjs';
if(process.argv.length!==4||!process.env.OPO_BACKUP_KEY_FILE)throw Error('Usage: OPO_BACKUP_KEY_FILE=<private-key-file> node scripts/decrypt-backup.mjs <encrypted.opobak> <new-private-output.db>');
const output=await decryptBackup(process.argv[2],process.argv[3],process.env.OPO_BACKUP_KEY_FILE);
console.log('Authenticated backup decrypted to a new file:',output);
