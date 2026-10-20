import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {createPreviewServer} from '../scripts/start-model-preview.mjs';
const {chromium}=createRequire(import.meta.url)('C:/Users/Lenovo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const server=createPreviewServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));
const base=process.env.OPO_UPLOAD_TEST_URL||'http://127.0.0.1:'+server.address().port+'/admin-preview.html#products';
try{
 await page.goto(base);await page.locator('[name=username]').fill('demo');await page.locator('[name=rightsId]').fill('DEMO-RIGHTS-001');await page.locator('#admin-login-form button').click();
 await page.getByRole('button',{name:'＋ 发布商品'}).click();assert(await page.locator('#product-form').isVisible());assert.equal(new URL(page.url()).hash,'#publish');assert.equal(await page.locator('#publish-shipping').innerText(),'物流与售后');
 await page.getByRole('button',{name:'填入示例资料'}).click();
 const image={name:'upload-demo.png',mimeType:'image/png',buffer:Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aX1sAAAAASUVORK5CYII=','base64')};
 await page.locator('[name=mainImage]').setInputFiles(image);await page.locator('#main-preview img').waitFor();
 await page.locator('[name=detailImages]').setInputFiles([image]);await page.locator('#details-preview img').waitFor();
 await page.locator('[name=level1Rate]').fill('3');await page.locator('[name=level2Rate]').fill('2');await page.locator('[name=whitelistRate]').fill('1.5');assert.match(await page.locator('#commission-advice').innerText(),/超过建议上限1%/);
 await page.getByRole('button',{name:'预览商品效果'}).click();await page.locator('#product-effect .effect-main').waitFor();
 assert.equal(await page.locator('#product-effect .effect-detail').count(),1);
 await page.locator('#product-form button[type=submit]').click();await page.waitForFunction(()=>location.hash==='#products');
 const row=page.locator('#listing tbody tr').filter({hasText:'OPO 示例商品（非真实在售）'});assert.equal(await row.count(),1);assert.match(await row.innerText(),/草稿/);assert.match(await row.innerText(),/1.5%/);
 await row.getByRole('button',{name:'查看 / 素材预览'}).click();assert.equal(await page.locator('[name=level1Rate]').inputValue(),'3');assert.equal(await page.locator('[name=level2Rate]').inputValue(),'2');assert.equal(await page.locator('[name=whitelistRate]').inputValue(),'1.5');assert.equal(await page.locator('#main-preview img').count(),1);assert.equal(await page.locator('#details-preview img').count(),1);
 await page.locator('[name=submit]').selectOption('提交审核');await page.locator('#product-form button[type=submit]').click();await page.waitForFunction(()=>location.hash==='#products');
 assert.match(await row.innerText(),/待审核/);assert(await row.getByRole('button',{name:'通过',exact:true}).isDisabled());
 await row.getByRole('button',{name:'查看 / 素材预览'}).click();
 for(const width of [1440,768,390,360]){await page.setViewportSize({width,height:1000});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));assert(await page.locator('#product-form button[type=submit]').isEnabled());}
 await page.setViewportSize({width:1440,height:1000});await page.evaluate(()=>window.scrollTo(0,0));await page.screenshot({path:'test-results/upload-realistic-desktop.png'});
 await page.setViewportSize({width:390,height:1000});await page.screenshot({path:'test-results/upload-realistic-mobile.png'});
 await page.evaluate(()=>location.hash='products');await page.reload();await page.locator('[name=username]').fill('demo');await page.locator('[name=rightsId]').fill('DEMO-RIGHTS-001');await page.locator('#admin-login-form button').click();
 assert.equal(await page.locator('#listing tbody tr').filter({hasText:'OPO 示例商品（非真实在售）'}).count(),0);assert.deepEqual(errors,[]);
 console.log('PASS: publication button opens, media preview, sample fields, above-1% save, draft edit retains images, review submission, real approval disabled, four widths, refresh resets');
}finally{await browser.close();await new Promise(r=>server.close(r))}
