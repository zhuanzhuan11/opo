import test from 'node:test';import assert from 'node:assert/strict';import {checkoutQuote,SCALE} from '../frontend/assets/model-math.mjs';
test('checkout accepts chosen points below half and preserves exact total',()=>{
 assert.deepEqual(checkoutQuote(4950,100*SCALE,true,1000),{pointCents:1000,cashCents:3950});
 assert.deepEqual(checkoutQuote(4950,100*SCALE,true,0),{pointCents:0,cashCents:4950});
 assert.equal(checkoutQuote(4950,100*SCALE,true,2474).pointCents,2474);
 assert.throws(()=>checkoutQuote(4950,100*SCALE,true,2475));
 for(const n of [-1,1.1,NaN,Infinity,2500])assert.throws(()=>checkoutQuote(4950,100*SCALE,true,n));
 assert.throws(()=>checkoutQuote(4950,1*SCALE,true,101));assert.equal(checkoutQuote(4950,1*SCALE,true,100).cashCents,4850);
 assert.equal(checkoutQuote(4951,100*SCALE,true,2475).cashCents,2476);
 assert.equal(checkoutQuote(1,100*SCALE,true,0).pointCents,0);
});
