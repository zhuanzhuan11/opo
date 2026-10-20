import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {createPreviewServer} from '../scripts/start-model-preview.mjs';
const {chromium}=createRequire(import.meta.url)('C:/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const server=createPreviewServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];
page.setDefaultTimeout(10000);page.on('pageerror',e=>{errors.push(e.message);console.error(e.message)});page.on('response',r=>{if(r.status()>=400)console.error('HTTP '+r.status()+' '+r.url())});
try{
 await page.goto(process.env.ENI_CHANNEL_URL||`http://127.0.0.1:${server.address().port}`);
 await page.locator('.eni-home-entry').waitFor();
 assert.match(await page.locator('.eni-home-entry').innerText(),/ENI用户专用通道/);
 const social=page.locator('.social-community');assert.match(await social.innerText(),/DeBox\s+OPO去中心化商城\(会员群\)\s+链接待提供/);
 assert.equal(await social.locator('a[href*="671a"]').count(),0);assert.equal(await social.locator('a[href="https://t.me/+PTrwmNRCG30yOTY1"]').count(),1);assert.equal(await social.locator('a[href="https://t.me/MGWGG"]').count(),0);assert.doesNotMatch(await social.innerText(),/MGWGG|ENI&WGG/);assert.match(await social.locator('a[href="https://t.me/+PTrwmNRCG30yOTY1"]').innerText(),/opo去中心化商业平台/);
 await page.locator('.eni-home-entry [data-go="eni-channel"]').click();await page.locator('.eni-channel').waitFor();
 assert.match(await page.locator('main').innerText(),/建议一切信息以官方公告为准/);
 assert.equal(await page.locator('main a[href="https://scan.eniac.network/"]').count(),1);
 await page.evaluate(()=>location.hash='assets');await page.locator('[data-wallet-guide="TokenPocket"]').waitFor();
 await page.locator('[data-wallet-guide="TokenPocket"]').first().click();await page.locator('dialog[open]').waitFor();
 assert.match(await page.locator('dialog').innerText(),/EIP-1193/);await page.locator('#close').click();
 await page.locator('[data-exchange]').first().click();await page.locator('dialog[open]').waitFor();
 assert.match(await page.locator('dialog').innerText(),/不作为唯一渠道/);await page.locator('#close').click();
 for(const lang of ['en','ja','zh-CN']){
  await page.locator(`[data-language="${lang}"]`).click();
  for(const hash of ['home','assets','eni-channel']){
   await page.evaluate(h=>location.hash=h,hash);await page.waitForTimeout(100);
   if(lang==='en'&&hash==='eni-channel')assert.match(await page.locator('main').innerText(),/Dedicated ENI user channel/);
   if(lang==='ja'&&hash==='eni-channel')assert.match(await page.locator('main').innerText(),/ENIユーザー専用窓口/);
   for(const width of [1440,768,390,360]){await page.setViewportSize({width,height:1000});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${lang}/${hash}/${width}`)}
  }
 }
 assert.deepEqual(errors,[]);console.log('PASS: ENI home/channel/assets, official links and notice, DeBox display name, wallet/OTC guides, three languages and four widths');
}finally{await browser.close();await new Promise(r=>server.close(r))}
