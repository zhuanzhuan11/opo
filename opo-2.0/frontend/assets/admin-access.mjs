export async function adminSessionReady(){
 try{
  const sessionResponse=await fetch('/api/session',{credentials:'same-origin',cache:'no-store'});
  if(!sessionResponse.ok)return false;
  const session=await sessionResponse.json();
  if(session?.user?.role!=='admin')return false;
  const securityResponse=await fetch('/api/admin/security',{credentials:'same-origin',cache:'no-store'});
  return securityResponse.ok;
 }catch{return false}
}
