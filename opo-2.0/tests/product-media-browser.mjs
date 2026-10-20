import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {createPreviewServer} from '../scripts/start-model-preview.mjs';
const {chromium}=createRequire(import.meta.url)('C:/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const server=createPreviewServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage();
try{
 await page.goto('http://127.0.0.1:'+server.address().port+'/admin-preview.html#products');
 await page.locator('[name=username]').fill('demo');await page.locator('[name=rightsId]').fill('DEMO-RIGHTS-001');await page.locator('#admin-login-form button').click();
 await page.getByRole('button',{name:'＋ 发布商品'}).click();
 await page.locator('[name=video]').setInputFiles({name:'oversize.mp4',mimeType:'video/mp4',buffer:Buffer.alloc(10*1024*1024+1)});
 await page.waitForFunction(()=>document.querySelector('#toast').textContent.includes('10MB'));
 await page.locator('[name=video]').setInputFiles({name:'broken.mp4',mimeType:'video/mp4',buffer:Buffer.from('invalid')});
 await page.waitForFunction(()=>document.querySelector('#toast').textContent.includes('无法读取视频'));
 console.log('PASS: oversized video rejected before decoding, corrupt video rejected; valid-video decoding not covered');
}finally{await browser.close();await new Promise(r=>server.close(r))}
