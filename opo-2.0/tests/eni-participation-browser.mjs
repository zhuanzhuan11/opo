import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {createPreviewServer} from '../scripts/start-model-preview.mjs';
const {chromium}=createRequire(import.meta.url)('C:/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const server=createPreviewServer();await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];page.on('pageerror',error=>errors.push(error.message));
try{
 await page.goto(process.env.ENI_TEST_URL||'http://127.0.0.1:'+server.address().port);
 await page.locator('[data-go=eni]').click();await page.locator('#eni-model').waitFor();
 const panel=page.locator('#eni-panel');
 assert.match(await panel.innerText(),/先参与建设，真实达标后获得白名单/);
 assert.match(await panel.innerText(),/5,000已释放未消费OPOC起取得白名单/);
 assert.match(await panel.innerText(),/共享现有城市专项三年总额50万USDT等值ZC/);
 assert.equal(await page.locator('.sideextra [data-go=eni]').getAttribute('aria-current'),'page');
 assert.match(await page.locator('[data-eni=burn]').innerText(),/10000.000000 ZC/);
 assert.match(await page.locator('[data-eni=total]').innerText(),/200.000000 OPOC/);
 assert.match(await panel.innerText(),/不锁仓/);
 assert.match(await panel.innerText(),/已购买平台商品的伙伴/);
 await page.locator('#eni-model [name=startDate]').fill('2026-01-01');
 assert.equal(await page.locator('#eni-release-ledger tbody tr').count(),15);
 assert.match(await page.locator('#eni-release-ledger tbody tr').first().innerText(),/2026-01-02/);
 assert.match(await page.locator('#eni-release-ledger tbody tr').first().innerText(),/已释放/);
 await page.locator('#eni-release-ledger [data-ledger-page=next]').click();
 assert.match(await page.locator('#eni-release-ledger tbody tr').first().innerText(),/2026-01-17/);
 assert.match(await page.locator('#eni-release-ledger tbody tr').first().innerText(),/第|16/);
 await page.locator('#eni-model [name=days]').fill('365');
 assert.match(await page.locator('[data-eni=released]').innerText(),/200.000000 OPOC/);
 assert.match(await page.locator('[data-eni=future]').innerText(),/0.000000 OPOC/);
 assert.equal(await page.locator('#eni-release-ledger tbody tr').count(),15);
 await page.locator('#eni-model [name=price]').fill('0.02');
 assert.match(await page.locator('[data-eni=burn]').innerText(),/5000.000000 ZC/);
 assert.match(await page.locator('[data-eni=total]').innerText(),/200.000000 OPOC/);
 await page.locator('#eni-interest [name=nickname]').fill('模拟参与者');
 await page.locator('#eni-interest button').click();
 assert.match(await page.locator('#eni-interest-result').innerText(),/尚未授予真实白名单/);
 await page.locator('#eni-model [name=days]').fill('366');
 assert.match(await page.locator('#eni-result').innerText(),/0—365/);
 await page.locator('#eni-model [name=days]').fill('30');
 for(const lang of ['en','ja','zh-CN']){
  await page.locator('[data-language="'+lang+'"]').click();await page.waitForTimeout(70);
  assert.equal(await page.locator('#eni-interest [name=nickname]').inputValue(),'模拟参与者');
  if(lang==='en')assert(!/[\u4e00-\u9fff]/.test(await panel.innerText()));
  for(const width of [1440,768,390,360]){await page.setViewportSize({width,height:1000});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth))}
 }
 await page.setViewportSize({width:1440,height:1000});await page.screenshot({path:'test-results/eni-participation-desktop.png',fullPage:true});
 await panel.locator('[data-go=shop]').click();await page.locator('.products').waitFor();assert.deepEqual(errors,[]);
 console.log('PASS: ENI release ledger, immediate availability, 365-day precision, pagination, usage boundary, translations and responsive layout');
}finally{await browser.close();await new Promise(resolve=>server.close(resolve))}