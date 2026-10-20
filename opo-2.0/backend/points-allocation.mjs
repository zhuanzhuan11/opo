import {integer,fail} from './domain.mjs';
export function allocatePoints(items,points){
 integer(points);const total=items.reduce((sum,x)=>sum+integer(x.price,1)*integer(x.qty,1,100),0);integer(total,1);
 const rows=items.map(x=>{const subtotal=x.price*x.qty;const numerator=BigInt(points)*BigInt(subtotal);return {key:x.product_id+'\0'+x.sku,cap:Math.floor(subtotal/2),points:Number(numerator/BigInt(total)),remainder:numerator%BigInt(total)}});
 if(points>rows.reduce((sum,r)=>sum+r.cap,0))fail('INVALID_AMOUNT');
 let remaining=points-rows.reduce((sum,r)=>sum+r.points,0);
 for(const row of [...rows].sort((a,b)=>a.remainder===b.remainder?(a.key<b.key?-1:a.key>b.key?1:0):a.remainder>b.remainder?-1:1)){if(remaining&&row.points<row.cap){row.points++;remaining--}}
 if(remaining)throw Error('POINTS_ALLOCATION_FAILED');
 return new Map(rows.map(row=>[row.key,row.points]));
}
