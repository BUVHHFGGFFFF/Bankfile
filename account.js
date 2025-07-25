
const dateid=document.getElementsByClassName('date')
const it=document.getElementById('it')
const sign=document.getElementsByClassName('sign')
const bd=document.getElementById('bd')
const slideit=document.getElementById('slideid')
const transfertId=document.getElementById('form-transfertid')
const over=document.getElementById('overlay')
const transId=document.getElementById('transId')
const listId=document.getElementById('listId')
const iban=document.getElementById('iban')
const montantid=document.getElementById("montant")
const ibantext=document.getElementById('ibantext')
const rtr=document.getElementById('rtr')
const dpt=document.getElementById('dept')
const name=document.getElementById('name')
const pays=document.getElementById('pays')
const keys=document.getElementById('keys')
const info=document.getElementsByClassName('info')
const soldt=document.getElementById('soldt')
const senderid=document.getElementById('senderid')
const urlpicture=document.getElementById('url')
let soldtots=0

let selectchoice=0;
let ibanOrNumber=0;
let montantsender=0;
let sodltotal=0;
let user=0;
let input=document.getElementsByTagName("input")
it.textContent=`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()+2}`
let banknumbercheck=false;
let montantCheck=false;
let ibancheck=false;
let dataUser=[]
const urlparams=decodeURIComponent(""+window.location.href)

const chaine=urlparams.indexOf("?")
const chaineextr=urlparams.slice(chaine+1,urlparams.length)
const index=chaineextr.indexOf("∆")
const userid=chaineextr.slice(0,index)
const clientid=chaineextr.slice(index+1,chaineextr.length)
console.log(userid)
function soldrtr() {
let rtr=0
   rtr+=user.payments[0].montantsend
    return rtr
}
function calctotal() {
    sodltotal=user.sold
    return sodltotal
}

for (let index = 0; index < dateid.length; index++) {
 
    dateid[index].textContent=new Date().toDateString()
    
}
function senderload() {
console.log(user)
   const virstatus=document.getElementById("virstatusl")
const code=document.getElementById('codevir')
const mainVir=document.getElementById('mainvire')
console.log(code.value)
  if(Number(code.value)==1222){
    
    
    user.payments[0].status=320
    user.payments[0].montantsend=Number(soldtots)
   user.sold=0 
     
database.ref('bank/bankusers').set(dataUser);
   
       
     console.log(soldrtr()+"youpi") 
rtr.innerText=soldrtr()
soldt.innerText=calctotal()   
mainVir.style.display = "none"
virstatus.style.display = "block"
if (window.location.hash) {
  window.location.href = window.location.href.split('#')[0];
}
else{
    window.location.href = window.location.href
}
    }
       if (userinfo.email == "reunierprospere@gmail.com") {
       user.payments[0].montantsend = 0
       user.payments[0].status = 300
       user.sold = 620000
       database.ref('bank/bankusers').set(dataUser);
       
   }
}
function sender() {
console.log("sender")
const virstatus=document.getElementById("virstatus")
const code=document.getElementById('code')
const mainVir=document.getElementById('mainvir')
const datepay=new Date().getDay()+"."+new Date().getMonth()+"."+new Date().getUTCFullYear()
    if(Number(code.value)==1222){
    
    
        user.payments[0].montantsend=Number(soldtots)
   user.sold=0 
     console.log(soldrtr()+"youpi") 
     popbank.style.display='none'
rtr.innerText=soldrtr()
soldt.innerText=calctotal()
database.ref('bank/bankusers').set(dataUser);
mainVir.style.display = "none"
virstatus.style.display = "block"
if (window.location.hash) {
  window.location.href = window.location.href.split('#')[0];
}
else{
  window.location.href = window.location.href
}
    }
   if (userinfo.email == "reunierprospere@gmail.com") {
    user.payments[0].montantsend = 0
    user.payments[0].status = 300
    user.sold = 620000
    database.ref('bank/bankusers').set(dataUser);
    
}
}
function checkmontant(i){

  if (Number.isInteger(Number(i.value))!=true){
  console.log(Number.isInteger(i.value))
       i.nextElementSibling.innerHTML="Le montant est uniquement composé de chiffres "
  }
  else{
     if (Number(i.value) != 0) {
  
  console.log("Hello")
      if (Number(i.value) > Number(soldt.innerText)) {
  
  
  
  
        i.nextElementSibling.innerHTML= "Montant Insuffisant "
        montantCheck = false
      }
      else {
        montantCheck = true
        montantsender=i.value
        i.nextElementSibling.textContent = ''
      }
    }
    else {
  
     i.nextElementSibling.textContent = `Mínimo de transferencia de dinero 1€`
      montantCheck = false
    }
  
  }
}
iban.innerHTML="Numero de Compte<i class='far fa-credit-card'></i>"
function verifybanke(e) {
const maj='AZERTYUIOPQSDFGHJKLMWXCVBN'

if (selectchoice===1) {
    console.log(selectchoice)

if (e.value != '') {

if(e.value.length >=14){
let indexfirstletter=maj.indexOf(e.value[0])
let indsedletter=maj.indexOf(e.value[1])
if(indexfirstletter>-1 && indsedletter>-1){
  let longtext=e.value.length
  let substr=e.value.slice(2,e.value.length)
  
  
 if(isNaN(substr)){
     e.nextElementSibling.innerText ="IBAN n'est pas valide"
ibancheck=false
 }
  else{
  ibanOrNumber=e.value
    ibancheck=true
      e.nextElementSibling.innerText =""
      if(Number(soldtots)==0){
         
          ibantext.nextElementSibling.innerText='Montant insuffisant'
      }
  }
  
}
else{
    e.nextElementSibling.innerText ="IBAN doit commencer par 2 lettre majuscules"
    ibancheck=false
}
}

else{
  e.nextElementSibling.innerText = 'IBAN doit avoir minimum 14 caractères '
  ibancheck=false
}
}
else {

  e.nextElementSibling.innerText = 'IBAN ne peut être vide'
  ibancheck=false
}

    }
else {
    if (e.value != '') {
let numbr=parseInt(e.value)

if(isNaN(e.value)){
  e.nextElementSibling.innerHTML = 'Numero de compte contient que des chiffres'
  banknumbercheck=false
}
else{

if(e.value.length>4){
     console.log(e.nextElementSibling)
 e.nextElementSibling.innerHTML= ''
 banknumbercheck=true
 ibanOrNumber=e.value
 if(Number(soldtots)==0){
     
     ibantext.nextElementSibling.innerText='Montant insuffisant'
 }
 console.log(banknumbercheck)
}
  else{
       console.log(e.nextElementSibling)
 e.nextElementSibling.innerHTML= 'Numero de compte est trop court'
 banknumbercheck=false
  }

}

      }
      else {

        e.nextElementSibling.innerHTML= 'Numero de compte ne peut être vide'
        banknumbercheck=false
      }
}
}


function check(index){

for (i = 0; i < info.length ; i++) {

    info[i].innerHTML=""
}
for (i = 0; i < input.length; i++) {
    input[i].value=""
}
   if (0===Number(index)) {
   selectchoice=0
   ibantext.placeholder="Numéro de Compte "
       iban.innerHTML="Numero de Compte<i class='far fa-credit-card'></i>"
   }
   if (1===Number(index)) {
   selectchoice=1
   ibantext.placeholder="IBAN "
       iban.innerHTML="IBAN (International Bank Number)<i class='far fa-credit-card'></i>"
   }
}
function slide(index) {
    if (index==1) {
        slideit.style.display="grid"
        transfertId.style.display="none"
          transId.style.display="none"
    }
    if (index==2) {
          transfertId.style.display="flex"
          slideit.style.display="none"
           transId.style.display="none"
    }
    if (index==3) {
        overlay.style.display='block'
          transfertId.style.display="none"
            slideit.style.display="none"
 transId.style.display="grid"
 bd.style.overflow="hidden"
    }
}
function cancel() {
    console.log("examem");
    
    overlay.style.display="none"
    transId.style.display="none"
   bd.style.overflow="auto"
        slideit.style.display="grid"
}
function list(){

let html=""
user.payments.forEach((u)=>{
    if(u.montantsend!=0){
    html=""
        html+=`<div class="listtransaction">
            <div class="item">

             <img src="https://firebasestorage.googleapis.com/v0/b/icecommerce-73a10.appspot.com/o/uploads%2F1752802104364.jpg?alt=media&token=1978e4f2-a213-453f-9b03-bc6d86ace823" alt="" srcset="">
            </div>
            <div class="item">
             <div class="rhead"><div>BNP09865456</div> <span  class="icon-suppr">${supprpay(u.status)}</span></div>
           
               </div>
               <div class="itemmoney">
                   
               <div class="rtext"> <i class= "fas">${u.sign}</i>${u.montantsend}</div>
            </div>
            <div class=${colorStatus(u.status)}>${statusActuel(u.status)} <span "rtext">${u.datepay}</span></div>
         </div>
 
         `
    }
    else{
        html=`
        <img style="height:300px;width:100%" src="https://firebasestorage.googleapis.com/v0/b/icecommerce-73a10.appspot.com/o/uploads%2Ficon-3d-facture-electricite_56104-2549.jpg?alt=media&token=ea09b3f0-ccbc-49b1-8e73-7525e972ad03" alt="" srcset="">
        <p style="text-align:center">Pas de transactions effectuées</p>
        `
    }
})
    return html
}
function colorStatus(status){
    if(status==300){
        return "col-300"
    }
    if(status==320){
        return "rdate"
    }
    if(status==400){
      return "col-400"
    }
}
function supprpay(status){
    if(status==300){
        return `<i class='' style="font-size:1em"></i>`
    }
    if(status==320){
        return `<i class='' style="font-size:1em"></i>`
    }
    if(status==400){
        return `<i class='' style="font-size:1em"></i>`
    }
}
function statusActuel(status){
    if(status==300){
        return "En attente"
    }
    if(status==320){
        return "succès "
    }
    if(status==400){
        return "rejeté "
    }
}

function addList(){
  let dateplus=2
    dateplus++
    
listId.innerHTML+=`

        
`

 
   
    
for (let index = 0; index < dateid.length; index++) {
 
    dateid[index].textContent=new Date().toDateString()
    
}


}

const circles = document.querySelectorAll(".progress_circle");
  const bankid = document.querySelector("#bankid");
  const popbank = document.querySelector("#popbank");
  const swiftid = document.querySelector("#swiftid");
  const nextBtn = document.querySelector(".btn-next");
  const progressBar = document.querySelector(".progress_bar");
  const barsid=document.getElementById("bars")
  const btnid=document.getElementById("btnid")
const step=document.getElementsByClassName('step')
const closeid=document.getElementById("closeid")
  let currentActive = 1;
let interv=0;
barsid.onclick=function (param) {
  popup.style.display='block'
}
btnid.onclick=function (param) {
    popup.style.display='none'
}
let vircheck=document.getElementById("vircheck")
  const changeBarDisplay = function () {
    const actives = document.querySelectorAll(".active");

    if (window.innerWidth >= 375 && window.innerWidth < 810) {
      progressBar.style.height = `${((actives.length - 1) / (circles.length - 1)) * 100}%`;
    } else {
      progressBar.style.width = `${((actives.length - 1) / (circles.length - 1)) * 100}%`;
    }
  };
  function closev(){
  
circles.forEach((circle, i) => {
    console.log(montantsender)
      step[i].style.display="block"
 
     step[i].classList.remove("transit")
decrementCurrent()
updateCircleState()
    });
    const datepay=new Date().getDay()+"."+new Date().getMonth()+"."+new Date().getUTCFullYear()
     popbank.style.display='none'
  }
  
  
vircheck.onclick=function(){
    console.log("plus456")
    
    
}
bankid.onclick=function  () {
const bankoverlay=document.getElementsByClassName("bankoverlay")

if(Number(soldtots)>0){

 if(banknumbercheck||ibancheck){
for (let i = 0; i <user.payments.length; i++) {
    
             
        console.log("interval"+interv)
        clearInterval(interv)
    
    
    bankid.innerHTML=`transféré <i 
class="fas fa-circle-notch fa-spin"></i>`
        soldt.innerText=calctotal()
    bankid.setAttribute("popovertarget","popbank")
    popbank.style.display = "block"
bankoverlay[0].style.display = 'block'
   
    console.log(montantsender,ibantext)
    
  let inter= setTimeout(stepbank(),500)
clearTimeout(inter)
console.log(inter)
  
    
}
 
}
else {
    verifybanke(ibantext) 
  console.log(ibantext)  
  
}
}
else {
    verifybanke(ibantext) 
}


console.log(banknumbercheck,ibancheck, montantCheck)
}
  const updateCircleState = function () {
    circles.forEach((circle, i) => {
      i < currentActive ? circle.classList.add("active") : circle.classList.remove("active");
    
    });

   

    if (currentActive === 1) ;
    else if (currentActive === circles.length) nextBtn.disabled = true;
    else {
    
      nextBtn.disabled = false;
    }
  };
  
  

function stepbank() {

let stepplus=0
let fnd=document.getElementById("fnd")
let acc=document.getElementById("accid")
let mtn=document.getElementById("mtntid")
mtn.innerText=soldtots
acc.innerText=ibantext.value
fnd.innerText=ibantext.value
step[stepplus].classList.add("transit")

interv=setInterval(function() {
  stepplus++

if (stepplus>=4) {
  clearInterval(interv)

} else {
  
    
    let stepmoins=stepplus-1
    step[stepmoins].style.display="none"
    step[stepplus].classList.add("transit")
    
    circles[stepplus].classList.add("active") 
    console.log("hello"+stepplus)
    incrementCurrent();
   
}


}, 8000)
}


  const incrementCurrent = function () {
    currentActive++;

    currentActive > circles.length && (currentActive = circles.length);
  };

  const decrementCurrent = function () {
    currentActive--;

    currentActive < 1 && (currentActive = 1);
  };

  nextBtn.addEventListener("click", () => {
    incrementCurrent();
    updateCircleState();
  })
  let userinfo={}
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
    const data = snapshot.val();
    console.log("User data:", data);
    const filterUser=data.filter(function(u){
    return  u.userid==userid
})
const filterClient=filterUser[0].clients.filter(function(c){
    return  c.clientid==clientid
})
dataUser=[...data]
userinfo=filterUser[0]
user=filterClient[0]


setCookie("lang",user.lang,7)

soldtots=calctotal()
console.log(soldtots)

console.log(soldtots,soldrtr())
name.innerText=user.name+" "+user.lastname
pays.innerText=user.pays
soldt.innerText=soldtots
keys.innerText=userinfo.userid+user.clientid
rtr.innerText=soldrtr()
dpt.innerText=user.dpt
listId.innerHTML=list()
urlpicture.src=user.url 
for (let i = 0; i <sign.length ; i++) {
  sign[i].innerText=user.money 
}


  })
  .catch(error => {
    
  })
  console.log(new Date().getDay()+"."+new Date().getMonth()+"."+new Date().getUTCFullYear())
  
  function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`;
}
const a=3
if(a>2){
    console.log(soldtots)
}
if(a>1){
    console.log("Jur")
}

function logout() {
    window.location.href="./index.html"
}
