import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {createPreviewServer} from '../scripts/start-model-preview.mjs';
const {chromium}=createRequire(import.meta.url)('C:/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const server=createPreviewServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1100}}),errors=[];
page.setDefaultTimeout(10000);page.on('pageerror',e=>errors.push(e.message));
try{
 await page.goto(process.env.AI_SERVICE_URL||`http://127.0.0.1:${server.address().port}`);
 await page.locator('.right-rail [data-go="ai-service"]').click();
 await page.locator('#ai-center').waitFor();
 assert.match(await page.locator('#ai-center').innerText(),/AI数字服务/);
 for(const width of [1440,1024,768,390,360]){
  await page.setViewportSize({width,height:1100});
  for(const tab of ['intro','consult','groups','products','daily','cloud','owner']){
   await page.locator(`[data-tab="${tab}"]`).click();
   assert(await page.locator(`[data-panel="${tab}"]`).isVisible());
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width}/${tab}`);
  }
 }
 await page.locator('[data-tab="consult"]').click();await page.locator('#ai-channel').selectOption('x');await page.locator('#ai-answer').click();assert.match(await page.locator('#ai-reply').innerText(),/待审稿/);
 await page.locator('[data-tab="groups"]').click();await page.locator('#ai-join').selectOption('debox');await page.locator('#ai-approve').click();assert.match(await page.locator('#ai-join-result').innerText(),/人工/);
 await page.locator('[data-tab="products"]').click();await page.locator('#ai-product').click();await page.locator('#ai-media').click();assert.match(await page.locator('#ai-product-result').innerText(),/未上架/);
 await page.locator('[data-tab="daily"]').click();await page.locator('#ai-digest').click();assert.match(await page.locator('#ai-digest-result').innerText(),/全部/);assert(await page.getByRole('button',{name:'真实发送 · 尚未接入',exact:true}).isDisabled());
 await page.locator('[data-tab="cloud"]').click();assert.match(await page.locator('[data-panel="cloud"]').innerText(),/云端尚未接入/);
 await page.locator('#ai-close').click();await page.locator('#ai-open').click();await page.locator('[data-tab="intro"]').click();
 await page.setViewportSize({width:1440,height:1100});await page.screenshot({path:'E:/codex/yimei-ad-project/output/OPO-AI数字服务-平台预览-20261020.png',fullPage:true});await page.setViewportSize({width:390,height:1100});for(const lang of ['en','ja','zh-CN']){await page.locator(`[data-language="${lang}"]`).click();assert(await page.locator('#ai-center').isVisible());assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth))}
 assert.deepEqual(errors,[]);console.log('PASS: both service entry paths, seven tabs, sample workflows, no real send, return/reopen, five widths and language switches');
}finally{await browser.close();await new Promise(r=>server.close(r))}
