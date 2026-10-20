export function reconcile(d){
 const issues=[];
 const opocLiability=d.one("SELECT COALESCE(SUM(CASE WHEN credit NOT IN ('issuance','burn') THEN amount ELSE 0 END)-SUM(CASE WHEN debit NOT IN ('issuance','burn') THEN amount ELSE 0 END),0) n FROM journal WHERE asset='OPOC'").n;
 const reserve=d.balance('USDT','opoc-reserve');
 if(reserve<opocLiability)issues.push({code:'OPOC_RESERVE_SHORTFALL',required:opocLiability,actual:reserve});
 for(const row of d.all('SELECT * FROM orders')){
  if(row.refunded_cash<0||row.refunded_points<0||row.refunded_cash>row.cash||row.refunded_points>row.points)issues.push({code:'REFUND_OVERPAYMENT',order:row.id});
  const active=!['settled','refunded'].includes(row.status);
  for(const [asset,prefix,expected] of [['USDT','escrow:',active?row.cash-row.refunded_cash:0],['OPOC','points-escrow:',active?row.points-row.refunded_points:0]]){
   const actual=d.balance(asset,prefix+row.id);if(expected!==actual)issues.push({code:'ESCROW_MISMATCH',order:row.id,asset,expected,actual});
  }
 }
 for(const row of d.all('SELECT * FROM subscriptions')){
  if(row.paid<0||row.paid>row.total)issues.push({code:'VESTING_OVERPAYMENT',subscription:row.id});
  const actual=d.balance('ZC','vesting:'+row.id);if(actual!==row.total-row.paid)issues.push({code:'VESTING_RESERVE_MISMATCH',subscription:row.id});
 }
 return {ok:issues.length===0,mode:d.sandbox?'sandbox':'live-disabled',opocLiability,opocReserve:reserve,issues,at:d.now(),scope:'Internal ledger only; not proof of on-chain assets or external reconciliation'};
}
