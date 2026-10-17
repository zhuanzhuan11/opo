import {createCipheriv,createDecipheriv,randomBytes} from 'node:crypto';
import {createReadStream,createWriteStream} from 'node:fs';
import {readFile,open,link,unlink,stat} from 'node:fs/promises';
import {dirname,resolve,join} from 'node:path';
import {pipeline} from 'node:stream/promises';

const magic=Buffer.from('OPOBK001');
async function loadKey(path){const value=(await readFile(path,'utf8')).trim();if(!/^[a-f0-9]{64}$/i.test(value))throw Error('BACKUP_KEY_MUST_BE_32_BYTES_HEX');return Buffer.from(value,'hex')}
async function publish(generator,target){
 const output=resolve(target),temporary=join(dirname(output),'.opo-backup-'+randomBytes(16).toString('hex')+'.tmp');let created=false;
 const writer=createWriteStream(temporary,{flags:'wx',mode:0o600});writer.once('open',()=>{created=true});
 try{await pipeline(generator,writer);await link(temporary,output);return output}finally{if(created)await unlink(temporary).catch(()=>{})}
}
export async function encryptBackup(source,target,keyFile){
 if(resolve(source)===resolve(target))throw Error('BACKUP_SOURCE_EQUALS_TARGET');
 const key=await loadKey(keyFile),iv=randomBytes(12),cipher=createCipheriv('aes-256-gcm',key,iv);cipher.setAAD(magic);
 async function* chunks(){yield magic;yield iv;for await(const chunk of createReadStream(source))yield cipher.update(chunk);yield cipher.final();yield cipher.getAuthTag()}
 try{return await publish(chunks(),target)}finally{key.fill(0)}
}
export async function decryptBackup(source,target,keyFile){
 if(resolve(source)===resolve(target))throw Error('BACKUP_SOURCE_EQUALS_TARGET');
 const key=await loadKey(keyFile),size=(await stat(source)).size;if(size<36){key.fill(0);throw Error('INVALID_ENCRYPTED_BACKUP')}
 const reader=await open(source,'r'),header=Buffer.alloc(20),tag=Buffer.alloc(16);
 try{await reader.read(header,0,20,0);await reader.read(tag,0,16,size-16)}finally{await reader.close()}
 if(!header.subarray(0,8).equals(magic)){key.fill(0);throw Error('INVALID_ENCRYPTED_BACKUP')}
 const decipher=createDecipheriv('aes-256-gcm',key,header.subarray(8));decipher.setAAD(magic);decipher.setAuthTag(tag);
 async function* chunks(){if(size>36)for await(const chunk of createReadStream(source,{start:20,end:size-17}))yield decipher.update(chunk);yield decipher.final()}
 try{return await publish(chunks(),target)}finally{key.fill(0)}
}
