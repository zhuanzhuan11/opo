let session;
const lang=()=>document.documentElement.lang;
const t=(zh,en,ja)=>lang()==='en'?en:lang()==='ja'?ja:zh;
const make=(tag,text,attrs={})=>{const e=document.createElement(tag);if(text)e.textContent=text;for(const [k,v] of Object.entries(attrs))e.setAttribute(k,v);return e};
async function api(path,body){const r=await fetch('/api/'+path,{method:body?'POST':'GET',headers:body?{'Content-Type':'application/json','X-CSRF-Token':session?.csrf||''}:undefined,body:body?JSON.stringify(body):undefined});const data=await r.json();if(!r.ok)throw Error(data.error);return data}
function auth(register){
 const dialog=make('dialog'),close=make('button',t('关闭','Close','閉じる'),{type:'button',class:'close'});close.onclick=()=>dialog.close();dialog.append(close,make('h2',register?t('会员注册','Register','会員登録'):t('会员登录','Log in','ログイン')));
 const form=make('form',null,{class:'form',id:'memberForm'});
 const fields=[[t('会员账号（3–32位小写字母、数字或下划线）','Username (3–32 lowercase letters, digits or _)','アカウント（小文字英数字・_、3～32文字）'),'username','text',3,32]];
 if(register)fields.push([t('昵称','Display name','表示名'),'name','text',1,80]);
 fields.push([t('密码（12–128位）','Password (12–128 characters)','パスワード（12～128文字）'),'password','password',12,128]);
 fields.push(register?[t('邀请码（没有可留空，自动绑定商城邀请码 opo）','Invite code (blank uses OPO code: opo)','紹介コード（空欄はOPOコードopo）'),'invite','text',0,32]:[t('管理员验证码（普通会员留空）','Admin code (members leave blank)','管理者コード（会員は空欄）'),'otp','text',0,6]);
 for(const [label,name,type,min,max] of fields){const l=make('label',label),input=make('input',null,{name,type,maxlength:max,autocomplete:name==='password'?(register?'new-password':'current-password'):name==='username'?'username':'off'});if(min){input.required=true;input.minLength=min}if(name==='username')input.pattern='[a-z0-9_]{3,32}';l.append(input);form.append(l)}
 if(register){const label=make('label',null,{class:'check'}),check=make('input',null,{type:'checkbox',name:'consent',required:''});label.append(check,make('span',t('我同意保存账号、昵称和邀请关系用于会员服务。密码以安全散列保存。数据请求可联系页面公开客服邮箱。','I agree to storage of my username, display name and referral for membership. Passwords are securely hashed. Contact public support for data requests.','会員サービスのためアカウント・表示名・紹介関係の保存に同意します。パスワードはハッシュ化。データの依頼は公開サポートへ。')));form.append(label)}
 const submit=make('button',register?t('注册会员','Register','登録'):t('登录','Log in','ログイン'),{type:'submit',class:'primary'}),status=make('p',null,{role:'status'});form.append(submit,status);
 form.onsubmit=async event=>{event.preventDefault();if(!form.reportValidity())return;submit.disabled=true;const body=Object.fromEntries(new FormData(form));if(register)body.consent=form.elements.consent.checked;try{session=await api(register?'register':'login',body);dialog.close();mount()}catch(e){const messages={INVALID_INVITE:t('邀请码无效，请核对；没有邀请码可留空。','Invalid invite code. Check it or leave blank.','紹介コードが無効です。確認するか空欄にしてください。'),ACCOUNT_EXISTS:t('账号已存在，请更换或登录。','Username exists. Choose another or log in.','既存アカウントです。変更するかログインしてください。'),BAD_CREDENTIALS:t('账号、密码或验证码错误。','Incorrect credentials.','認証情報が違います。'),RATE_LIMITED:t('操作频繁，请稍后再试。','Too many attempts. Try later.','後ほど再試行してください。')};status.textContent=messages[e.message]||t('操作未完成，请检查填写内容后重试。','Could not complete. Check your input and retry.','入力を確認し再試行してください。');status.className='error';submit.disabled=false}};
 dialog.append(form);document.body.append(dialog);dialog.addEventListener('close',()=>dialog.remove());dialog.showModal();
}
function mount(){
 const header=document.querySelector('.header'),main=document.querySelector('main');if(!header||!main)return;
 document.querySelector('#membership')?.remove();document.querySelector('#usage-guide')?.remove();
 const nav=make('nav',null,{id:'membership',class:'row','aria-label':t('会员与帮助','Members & help','会員・ヘルプ')});
 if(session?.user){nav.append(make('span',t('会员：','Member: ','会員：')+session.user.name));const out=make('button',t('退出','Log out','ログアウト'));out.onclick=async()=>{try{await api('logout',{});session=null;mount()}catch{out.textContent=t('重试退出','Retry logout','再試行')}};nav.append(out)}else for(const register of [true,false]){const button=make('button',register?t('会员注册','Register','会員登録'):t('登录','Log in','ログイン'),{type:'button',class:register?'primary':''});button.onclick=()=>auth(register);nav.append(button)}
 nav.append(make('a',t('商城使用说明','User guide','ご利用ガイド'),{href:'#usage-guide'}));header.append(nav);
 const guide=make('section',null,{id:'usage-guide',class:'panel'});guide.append(make('h2',t('商城使用说明','How to use OPO','ご利用ガイド')));
 const steps=[
 t('1. 注册与邀请：填写账号、昵称、密码及邀请码。没有邀请码可留空，系统自动绑定 OPO 商城的邀请码 opo；填错会提示修改。你的会员账号也是自己的邀请码。','1. Register with a username, display name, password and invite code. Leave blank to bind to OPO (opo). Invalid codes are rejected. Your username is your own invite code.','1. アカウント・表示名・パスワード・紹介コードで登録。コードなしは空欄でOPO（opo）に紐付きます。無効コードは修正が必要。自分のアカウントが紹介コードです。'),
 t('2. 浏览商品：选择中日英语言，搜索并查看商品资料。浏览和提交咨询不强制注册；暂无商品时请稍后再来。','2. Choose Chinese, English or Japanese, search and browse products. Browsing and inquiries do not require registration.','2. 中・英・日を選び商品を検索・閲覧。閲覧とお問い合わせは登録不要です。'),
 t('3. 咨询：点击商品咨询或填写咨询，留下联系邮箱和问题并同意信息处理说明。运营人员在后台查看后联系你；不会自动发送邮件，也不会创建已付款订单。','3. Send your email and question after agreeing to the inquiry notice. The operator reviews it and contacts you. No automatic email or paid order is created.','3. 説明に同意してメールと質問を送信。運営者が確認して連絡。自動メールや決済済み注文は作成されません。'),
 t('4. 当前功能：会员注册、商品展示和咨询。线上付款、充值、代币交易及奖励尚未开放；邀请码绑定不代表获得奖励。请勿提交钱包私钥或身份证件。','4. Membership, product information and inquiries only. Payments, deposits, token trading and rewards are unavailable. Referral binding does not grant rewards. Never send wallet secrets or ID documents.','4. 会員登録・商品展示・相談のみ。決済・入金・トークン取引・報酬は未提供。紹介は報酬付与を意味しません。秘密鍵・身分証を送信しないでください。')];for(const step of steps)guide.append(make('p',step));main.append(guide);
}
session=await api('session').catch(()=>null);
const app=document.querySelector('#app');new MutationObserver(()=>{if(!document.querySelector('#membership')&&document.querySelector('.header'))mount()}).observe(app,{childList:true});mount();
