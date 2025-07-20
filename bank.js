const overlay=document.getElementById('overlay')
const over=document.getElementById('over')
const auth=document.getElementById('auth')
const key=document.getElementById('key')
function cancel(params) {
     overlay.className=""
    over.style.display='none'
}
function openauth() {
    overlay.className="overlay"
   
    over.style.display='flex'
   

}
let dataUser=[]
const firebaseConfig = {
  apiKey: "AIzaSyDOsuZBeR5RkEXivt9aLcDaOeFKuc5tS3o",
  authDomain: "icecommerce-73a10.firebaseapp.com",
  databaseURL: "https://icecommerce-73a10.firebaseio.com",
  projectId: "icecommerce-73a10",
  storageBucket: "icecommerce-73a10.appspot.com",
  messagingSenderId: "128064356219",
  appId: "1:128064356219:web:fceea2632aa36931b987de",
  measurementId: "G-YXFQTCHKLW"
};
firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
     


 database.ref('bank/bankusers').once('value')
  .then(snapshot => {
    const data = snapshot.val()||[];
    console.log("User data:", data);
    
dataUser=[...data]





  })
  .catch(error => {
    console.error("Read error:", error);
  });
  function keysvalidate(){
     
console.log("Résolution")
if(auth.value!=""){
    const   chaineextr=auth.value
const index=chaineextr.indexOf("-")
const userid=chaineextr.slice(0,index)
const clientid=chaineextr.slice(index+1,chaineextr.length)
console.log(userid)
let filterUser=dataUser.filter(function(u){
    return  u.userid==userid
})
let keysvalidate=filterUser.length!=0?filterUser[0].clients.filter(function(c){
    return  c.clientid==clientid
}):[]
if(keysvalidate.length!=0) {
    key.innerText=""
    window.location.href=`./account.html?${auth.value}`
}
else {
    key.innerText="Votre clé d'accès à votre compte bancaire n'est pas valide"
}
}
else{
    key.innerText="veuillez insérer un clé d'accès pour accéder à votre compte bancaire "
}
  }
console.log(devicePixelRatio);
