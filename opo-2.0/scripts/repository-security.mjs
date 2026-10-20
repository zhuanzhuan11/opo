import {execFileSync} from 'node:child_process';
import {readFileSync,existsSync} from 'node:fs';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const repo=resolve(dirname(fileURLToPath(import.meta.url)),'../..');
const paths=execFileSync('git',['-C',repo,'ls-files','-z','--cached','--others','--exclude-standard']).toString().split('\0').filter(Boolean);
const findings=[];
for(const path of new Set(paths)){
 const full=resolve(repo,path);if(!existsSync(full))continue;
 if((/(^|\/)(\.secrets|node_modules|review|backups|backups-encrypted)(\/|$)|\.(db|db-wal|db-shm|pem|p12|pfx)$|(^|\/)(id_rsa|id_ed25519)$/.test(path))||(/(^|\/)\.env($|\.)/.test(path)&&!path.endsWith('.env.example')&&!path.endsWith('.env.catalog.example')))findings.push({path,rule:'private-file'});
 const raw=readFileSync(full);if(raw.includes(0))continue;const text=raw.toString();
 if(/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/.test(text)||/\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,}|AKIA[A-Z0-9]{16})\b/.test(text))findings.push({path,rule:'recognizable-secret'});
 if(/^\.github\/workflows\/.*\.ya?ml$/.test(path)){
  if(/\bpull_request_target\s*:|\bwrite-all\b|\bsecrets\s*:\s*inherit/.test(text))findings.push({path,rule:'privileged-workflow'});
  for(const match of text.matchAll(/\buses:\s*["']?([^\s"'#]+)/g)){const action=match[1];if(!action.startsWith('./')&&!/^[\w.-]+\/[\w./-]+@[a-f0-9]{40}$/.test(action))findings.push({path,rule:'unpinned-action'});}
  if(!/^permissions:\s*\{\}\s*$/m.test(text))findings.push({path,rule:'default-permissions'});
 }
}
const pkg=JSON.parse(readFileSync(resolve(repo,'opo-2.0/package.json'))),lock=JSON.parse(readFileSync(resolve(repo,'opo-2.0/package-lock.json')));
if(lock.lockfileVersion!==3||lock.packages[''].version!==pkg.version||JSON.stringify(lock.packages[''].dependencies||{})!==JSON.stringify(pkg.dependencies||{})||JSON.stringify(lock.packages[''].devDependencies||{})!==JSON.stringify(pkg.devDependencies||{}))findings.push({path:'opo-2.0/package-lock.json',rule:'lockfile-root-mismatch'});
console.log(JSON.stringify({ok:findings.length===0,scope:'Current candidate files only; heuristic guard, not Git history scanning, malware detection or proof of no secrets',files:new Set(paths).size,findings},null,2));
if(findings.length)process.exitCode=1;
