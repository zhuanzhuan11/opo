import {readdirSync} from 'node:fs';
import {join,relative} from 'node:path';
import {spawnSync} from 'node:child_process';
import {root} from '../backend/database.mjs';
function files(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(join(dir,e.name)):[join(dir,e.name)])}
for(const dir of ['backend','scripts','tests','frontend/assets'])for(const path of files(join(root,dir)).filter(f=>/\.(mjs|js)$/.test(f))){const result=spawnSync(process.execPath,['--check',path],{stdio:'inherit'});if(result.status!==0)process.exit(result.status||1)}
const tests=files(join(root,'tests')).filter(f=>f.endsWith('.test.mjs')).map(f=>relative(root,f));
const result=spawnSync(process.execPath,['--test',...tests],{cwd:root,stdio:'inherit'});process.exit(result.status||0);
