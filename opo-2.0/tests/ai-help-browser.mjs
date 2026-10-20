import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {createPreviewServer} from '../scripts/start-model-preview.mjs';
const {chromium}=createRequire(import.meta.url)('C:/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const server=createPreviewServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1100}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
try{
 await page.goto(process.env.AI_HELP_URL||`http://127.0.0.1:${server.address().port}`);
 for(const locale of ['zh-CN','en','ja']){
  await page.locator(`[data-language="${locale}"]`).click();
  for(const kind of ['faq','help']){
   await page.evaluate(k=>location.hash=k,kind);await page.locator('.guide-panel').waitFor();
   assert.equal(await page.locator('.guide-panel details').count(),kind==='faq'?29:14);
   const summaries=await page.locator('.guide-panel summary').allTextContents();
   assert(summaries.some(x=>locale==='zh-CN'?/AI数字服务/.test(x):locale==='en'?/AI Digital Services/.test(x):/AIデジタルサービス/.test(x)));
   for(const width of [1440,768,390,360]){await page.setViewportSize({width,height:1100});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth))}
   await page.locator('.guide-panel [data-go="ai-service"]').click();await page.locator('#ai-center').waitFor();
  }
 }
 assert.deepEqual(errors,[]);console.log('PASS: FAQ 29 questions, help 14 sections, AI content in three languages, service links and four widths');
}finally{await browser.close();await new Promise(r=>server.close(r))}
