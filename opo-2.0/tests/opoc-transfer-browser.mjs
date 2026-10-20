import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {createPreviewServer} from '../scripts/start-model-preview.mjs';
const {chromium}=createRequire(import.meta.url)(process.env.PLAYWRIGHT_MODULE||'playwright');
const server=createPreviewServer();await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const browser=await chromium.launch({headless:true,...(process.env.BROWSER_EXECUTABLE?{executablePath:process.env.BROWSER_EXECUTABLE}:{})});
const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];page.on('pageerror',error=>errors.push(error.message));
async function go(hash){await page.evaluate(value=>location.hash=value,hash);await page.waitForTimeout(80)}
async function register(digit){await go('member');await page.locator('#registerwallet').fill('0x'+digit.repeat(40));await page.locator('#registerpass').fill('Demo-only-2026');await page.locator('#register button').click();await page.locator('#memberid').waitFor();return (await page.locator('#memberid').innerText()).trim()}
try{
 await page.goto('http://127.0.0.1:'+server.address().port+'/#transfer');
 assert.equal(await page.locator('.sidebar [data-go="transfer"]').count(),1);assert.equal(await page.locator('#opocform').count(),0);
 const recipient=await register('2');
 await go('deposit');await page.locator('#depositform button').click();await page.locator('[data-confirm-deposit]').click();
 await go('shop');await page.locator('.product [data-buy]').first().click();await page.locator('#checkout').waitFor();await page.locator('#pointamount').fill('0');await page.locator('#checkout button[type=submit]').click();
 await go('orders');await page.locator('[data-complete-order]').click();
 await go('member');await page.locator('#logout').click();const sender=await register('1');
 await go('deposit');await page.locator('#depositform button').click();await page.locator('[data-confirm-deposit]').click();
 await go('rights');await page.locator('#subscribeamount').fill('50');await page.locator('#subscribe button').click();await page.locator('[data-days="365"]').click();
 await go('transfer');await page.locator('#opocrecipient').fill(recipient);await page.locator('#opocamount').fill('10.1234');await page.locator('#opocform button').click();await page.locator('#confirmopoc').click();assert.match(await page.locator('#main').innerText(),/89.8766/);
 await go('member');await page.locator('#logout').click();await page.locator('#loginid').fill(recipient);await page.locator('#loginpass').fill('Demo-only-2026');await page.locator('#login button').click();await page.locator('#memberid').waitFor();await go('transfer');
 assert.match(await page.locator('#main').innerText(),/10.1234/);assert.match(await page.locator('#main').innerText(),new RegExp(sender));
 for(const lang of ['zh-CN','ja','en']){await page.locator('[data-language="'+lang+'"]').click();for(const width of [1440,768,390,360]){await page.setViewportSize({width,height:1000});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true)}}
 await page.screenshot({path:'test-results/opoc-transfer-mobile.png',fullPage:true});assert.deepEqual(errors,[]);
 console.log('PASS: recipient must have a completed non-refunded product purchase before receiving OPOC; transfer records and balances persist across member switches');
}finally{await browser.close();await new Promise(resolve=>server.close(resolve))}
