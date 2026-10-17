import {id,text,integer,fail} from './domain.mjs';
import {rateLimit} from './security.mjs';

export function catalogConfig(){
 const operator=(process.env.OPO_OPERATOR_NAME||'').trim(),email=(process.env.OPO_SUPPORT_EMAIL||'').trim();
 const configured=operator.length>0&&operator.length<=160&&/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)&&email.length<=254;
 const retention=Number(process.env.OPO_INQUIRY_RETENTION_DAYS||30);
 if(!Number.isInteger(retention)||retention<1||retention>365)throw Error('INVALID_INQUIRY_RETENTION');
 return {mode:'catalog',paymentsEnabled:false,operator:operator.slice(0,160),supportEmail:configured?email:'',inquiriesEnabled:configured,retentionDays:retention,consentVersion:'catalog-inquiry-v1'};
}
function decode(row){return {...row,names:JSON.parse(row.names),descriptions:JSON.parse(row.descriptions)}}
export function catalogProducts(d,{all=false,offset=0,limit=100,search=''}={}){integer(offset,0,1000000);integer(limit,1,100);if(typeof search!=='string'||search.length>100)fail('INVALID_INPUT');const filter=all?'1=1':"status='published'";return d.all('SELECT * FROM catalog_products WHERE '+filter+' AND instr(lower(names),lower(?))>0 ORDER BY updated DESC,id LIMIT ? OFFSET ?',search,limit,offset).map(decode)}
export function saveCatalogProduct(d,u,b){
 if(u.role!=='admin')fail('FORBIDDEN',403);
 const old=b.id?d.one('SELECT * FROM catalog_products WHERE id=?',text(b.id)):null;if(b.id&&!old)fail('NOT_FOUND',404);if(old&&b.version!==old.version)fail('VERSION_CONFLICT',409);
 for(const [key,max] of [['names',160],['descriptions',4000]]){if(!Array.isArray(b[key])||b[key].length!==3)fail('INVALID_INPUT');b[key].forEach(v=>text(v,1,max))}
 let image='';if(b.image_url){const url=new URL(text(b.image_url,1,2000));if(url.protocol!=='https:'||url.username||url.password)fail('INVALID_IMAGE_URL');image=url.href}
 if(typeof b.published!=='boolean')fail('INVALID_INPUT');
 const pid=old?.id||id(),stamp=d.now();d.run('INSERT INTO catalog_products VALUES(?,?,?,?,?,1,?,?) ON CONFLICT(id) DO UPDATE SET names=excluded.names,descriptions=excluded.descriptions,image_url=excluded.image_url,status=excluded.status,version=catalog_products.version+1,updated=excluded.updated',pid,JSON.stringify(b.names),JSON.stringify(b.descriptions),image,b.published?'published':'draft',stamp,stamp);d.audit(u.id,'catalog.product.saved',pid,{published:b.published,version:(old?.version||0)+1});return {id:pid,version:(old?.version||0)+1};
}
export function submitInquiry(d,b,clientAddress){
 const config=catalogConfig();if(!config.inquiriesEnabled)fail('CONSULTATION_NOT_CONFIGURED',503);
 rateLimit(d.db,'catalog-inquiry',clientAddress,5,3600000,d.now());
 if(b.consent!==true||b.consent_version!==config.consentVersion)fail('CONSENT_REQUIRED');
 const email=text(b.email,3,254);if(!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email))fail('INVALID_EMAIL');
 const name=b.name?text(b.name,1,80):'',message=text(b.message,1,2000),language=['zh','en','ja'].includes(b.language)?b.language:'zh';
 let product=null;if(b.product_id){product=d.one("SELECT * FROM catalog_products WHERE id=? AND status='published'",text(b.product_id));if(!product)fail('PRODUCT_UNAVAILABLE')}
 const inquiryId=id();d.run('INSERT INTO catalog_inquiries VALUES(?,?,?,?,?,?,?,?,?,?,?)',inquiryId,product?.id||null,JSON.stringify(product?{id:product.id,names:JSON.parse(product.names),version:product.version}:null),email,name,message,language,'open',config.consentVersion,d.now(),d.now()+config.retentionDays*86400000);
 d.audit('public','catalog.inquiry.created',inquiryId,{product:product?.id||null,consentVersion:config.consentVersion});return {id:inquiryId,status:'open',delivery:'saved-for-operator',paymentCreated:false};
}
export function catalogAdmin(d){d.run('DELETE FROM catalog_inquiries WHERE expires<=?',d.now());return {products:catalogProducts(d,{all:true}),inquiries:d.all('SELECT * FROM catalog_inquiries ORDER BY created DESC LIMIT 100').map(r=>({...r,product_snapshot:JSON.parse(r.product_snapshot)}))}}
export function updateInquiry(d,u,b){if(u.role!=='admin')fail('FORBIDDEN',403);if(!['open','closed'].includes(b.status))fail('INVALID_INPUT');if(!d.run('UPDATE catalog_inquiries SET status=? WHERE id=?',b.status,text(b.id)).changes)fail('NOT_FOUND',404);d.audit(u.id,'catalog.inquiry.status',b.id,{status:b.status});return {ok:true}}
