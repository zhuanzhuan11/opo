import test from 'node:test';
import assert from 'node:assert/strict';
import {eniQuote} from '../frontend/assets/eni-math.mjs';

test('ENI OPOC releases immediately by daily schedule without a locked balance',()=>{
 const quote=eniQuote(100,0.01,30,'2026-01-01');
 assert.equal(quote.total,200);
 assert.equal(quote.released,Number(200_000_000n*30n/365n)/1e6);
 assert.equal(quote.future,200-quote.released);
 assert.equal(quote.rows.length,365);
 assert.equal(quote.rows[0].date,'2026-01-02');
 assert.equal(quote.rows[0].released,true);
 assert.equal(quote.rows[0].amountMicro,547945);
 assert.equal(quote.rows[30].released,false);
 assert.equal(quote.rows[30].date,'2026-02-01');
 assert.equal(quote.rows.at(-1).date,'2027-01-01');
 assert.equal(quote.rows.at(-1).cumulativeMicro,200_000_000);
 assert.equal(quote.rows.reduce((sum,row)=>sum+row.amountMicro,0),200_000_000);
 assert.equal(quote.rows.filter(row=>row.released).reduce((sum,row)=>sum+row.amountMicro,0),Number(200_000_000n*30n/365n));
});

test('ENI release schedule validates its date and elapsed-day bounds',()=>{
 assert.throws(()=>eniQuote(100,0.01,366,'2026-01-01'));
 assert.throws(()=>eniQuote(100,0.01,1,'2026-02-30'));
 assert.throws(()=>eniQuote(100,0.01,1,'not-a-date'));
 assert.equal(eniQuote(100,0.01,365,'2026-01-01').future,0);
});
