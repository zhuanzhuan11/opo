import {cents,legacyNodePreview} from './model-math.mjs';
import {fetchZcUsdtSpotPrice} from './zc-pool-price.mjs';

export function mountLegacyNodeCalculator(){
 const $=selector=>document.querySelector(selector),form=$('#legacyquote');
 if(!form)return;
 const update=()=>{
  try{
   const q=legacyNodePreview(cents($('#legacyinvestment').value),Number($('#legacydays').value),Number($('#legacyprice').value),Number($('#legacyreleased').value),Number($('#legacyreleasedzc').value));
   $('#legacyresult').innerHTML=`<div class="line"><span>算力份数</span><strong>${q.shares}</strong></div><div class="line"><span>三年累计释放价值上限</span><strong>${q.totalUSDT.toFixed(2)} USDT</strong></div><div class="line"><span>本次允许释放价值 / ZC</span><strong>${q.releaseUSDT.toFixed(6)} USDT / ${q.zc.toFixed(6)} ZC</strong></div><div class="line"><span>累计已释放ZC / 发放时累计价值</span><strong>${q.cumulativeZC.toFixed(6)} ZC / ${q.cumulativeUSDT.toFixed(6)} USDT</strong></div><div class="line"><span>累计释放ZC按当前链上价估值</span><strong>${q.currentValueUSDT.toFixed(6)} USDT</strong></div><div class="line"><span>剩余价值额度</span><strong>${q.remainingUSDT.toFixed(6)} USDT</strong></div><div class="line"><span>产出状态</span><strong>${q.capReached?'已达1.5倍上限，停止新增产出':'未达上限'}</strong></div>`;
  }catch(error){$('#legacyresult').textContent=error.message}
 };
 const readPrice=async()=>{
  const button=$('#refreshzcprice'),status=$('#zcprice-status'),root=$('#legacyquote');
  button.disabled=true;status.textContent='正在读取BSC链上LP储备…';
  try{
   const quote=await fetchZcUsdtSpotPrice();
   if(!root.isConnected)return;
   $('#legacyprice').value=quote.price.toFixed(10);
   status.textContent=`${quote.source} · LP ${quote.pair} · 区块 ${quote.block} · ${new Date(quote.at).toLocaleString()}`;
   update();
  }catch(error){
   if(!root.isConnected)return;
   $('#legacyprice').value='';
   status.textContent='链上价格读取失败：'+error.message+'。当前不使用手填或默认价格，产出试算已停用。';
   $('#legacyresult').textContent='未读取到有效的BSC ZC/USDT LP价格，不能计算本次ZC产出。';
  }finally{button.disabled=false}
 };
  for(const id of ['legacyinvestment','legacydays','legacyreleased','legacyreleasedzc'])$('#'+id).addEventListener('input',update);
 form.addEventListener('submit',event=>event.preventDefault());
 $('#refreshzcprice').addEventListener('click',readPrice);
 update();
 readPrice();
}
