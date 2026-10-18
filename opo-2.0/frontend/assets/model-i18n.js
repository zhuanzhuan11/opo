import {messages} from './model-translations.js';
const languages=['zh-CN','ja','en'];
let language='zh-CN';try{const saved=localStorage.getItem('opo-demo-language');if(languages.includes(saved))language=saved}catch{}
const originals=new WeakMap(),attributes=new WeakMap();
const escapePattern=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const matcher=new RegExp(Object.keys(messages).sort((a,b)=>b.length-a.length).map(escapePattern).join('|'),'g');
export function currentLanguage(){return language}
export function translate(value,locale=language){const source=String(value);if(locale==='zh-CN')return source;const ja=locale==='ja';let m;
 if((m=source.match(/^模拟已销毁 ([\d,]+) ZC · 第(\d+)天释放完成$/)))return ja?`デモのバーン済み数量：${m[1]} ZC・${m[2]}日目に付与完了`:`Demo burn: ${m[1]} ZC · Fully vested on day ${m[2]}`;
 if((m=source.match(/^测试时间：第 (\d+) 天$/)))return ja?`デモ時間：${m[1]}日目`:`Demo time: day ${m[1]}`;
 if((m=source.match(/^第(\d+)天开始$/)))return ja?`${m[1]}日目から開始`:`Starts on day ${m[1]}`;
 if((m=source.match(/^ZC · 第(\d+)天释放完成$/)))return ja?`ZC・${m[1]}日目に付与完了`:`ZC · Fully vested on day ${m[1]}`;
 if((m=source.match(/^天开始$/)))return ja?'日目から開始':' — start day';
 if((m=source.match(/^天释放完成$/)))return ja?'日目に付与完了':' — vesting complete';
 if((m=source.match(/^全部成本×([\d.]+) · 测试价$/)))return ja?`総原価×${m[1]}・デモ価格`:`Total cost × ${m[1]} · Demo price`;
 if((m=source.match(/^全部成本×2.5～3；当前倍率([\d.]+)。正式商品价格须使用完整真实成本。$/)))return ja?`総原価×2.5〜3。現在の倍率：${m[1]}。本番の商品価格は実際の総原価に基づいて設定します。`:`Total cost × 2.5–3; current multiplier ${m[1]}. Production prices must use complete, verified costs.`;
 if((m=source.match(/^1个节点 \/ (\d+)天：([\d.]+) USDT记账额度 ÷ ([\d.]+) = ([\d.]+) ZC（模拟，正式精度待实现）$/)))return ja?`1ノード・${m[1]}日分：${m[2]} USDT記帳額 ÷ ${m[3]} = ${m[4]} ZC（デモ・本番の精度処理は未実装）`:`1 node / ${m[1]} days: ${m[2]} USDT accounting entitlement ÷ ${m[3]} = ${m[4]} ZC (demo; production precision pending)`;
 return source.replace(matcher,key=>messages[key][locale]);}
function sync(){observer.disconnect();document.documentElement.lang=language;
 const walker=document.createTreeWalker(document.documentElement,NodeFilter.SHOW_TEXT);let node;
 while((node=walker.nextNode())){if(node.parentElement?.closest('script,style,[data-language-switch]'))continue;let record=originals.get(node);if(!record||node.nodeValue!==record.last)record={source:node.nodeValue,last:node.nodeValue};const next=translate(record.source);if(node.nodeValue!==next)node.nodeValue=next;record.last=next;originals.set(node,record)}
 for(const el of document.querySelectorAll('[placeholder],[aria-label],[alt],[title]')){if(el.closest('[data-language-switch]'))continue;let record=attributes.get(el)||{};for(const name of ['placeholder','aria-label','alt','title']){if(!el.hasAttribute(name))continue;const value=el.getAttribute(name);if(!record[name]||value!==record[name].last)record[name]={source:value,last:value};const next=translate(record[name].source);if(value!==next)el.setAttribute(name,next);record[name].last=next}attributes.set(el,record)}
 for(const button of document.querySelectorAll('[data-language]')){const active=button.dataset.language===language;button.setAttribute('aria-pressed',String(active));button.classList.toggle('active',active)}
 observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['placeholder','aria-label','alt','title']});}
const observer=new MutationObserver(sync);
export function setLanguage(next){if(!languages.includes(next))return;language=next;try{localStorage.setItem('opo-demo-language',language)}catch{}sync();window.dispatchEvent(new CustomEvent('opo-language-changed',{detail:language}))}
function init(){if(document.querySelector('.review-cover')){const note=document.createElement('p');note.className='sub localized-image-note';note.textContent='图示文字为中文，切换语言后请打开交互页面查看本语言版本。';document.querySelector('.review-cover').append(note)}const section=document.createElement('section');section.className='language-switch';section.dataset.languageSwitch='';section.setAttribute('aria-label','Language / 言語 / 语言');section.innerHTML='<p>语言 / 言語 / Language</p><div><button type="button" data-language="zh-CN" lang="zh-CN">中文</button><button type="button" data-language="ja" lang="ja">日本語</button><button type="button" data-language="en" lang="en">English</button></div>';const target=document.querySelector('.sidebar')||document.querySelector('.admin-title')||document.querySelector('header');if(target)target.prepend(section);else document.body.prepend(section);section.querySelectorAll('button').forEach(button=>button.onclick=()=>setLanguage(button.dataset.language));document.addEventListener('invalid',event=>{event.preventDefault();const toast=document.querySelector('#toast')||document.querySelector('#saved');if(toast){toast.textContent=translate('请检查必填项、格式和输入范围。');toast.classList.add('show')}event.target.focus()},true);sync()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
