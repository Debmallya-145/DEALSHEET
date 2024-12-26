
let scrollingText=document.querySelector("#scrollingText");
let Login = document.querySelector("#LogInButton");
let firstDiv = document.querySelector("#mainBox");
let inputBox1 = document.querySelector("#LoginID");
let inputBox2 = document.querySelector("#LoginPassword");
let msgBox = document.querySelector("#msgBox");
let Retry = document.querySelector("#retry");
let Body = document.querySelector("body");
let validationCheck = document.querySelector("#validationCheck");
let validationButton = document.querySelector("#validationButton");
let generationButton = document.querySelector("#generationButton");
let validationCode=document.querySelector("#validationCode");
let newMsg = document.createElement("div");
let dealSheet=document.querySelector("#DealSheet");
let randomNumber;
newMsg.classList.add("newMsg");
Login.addEventListener("click",()=>{
    randomNumber = Math.floor(100000+Math.random() * 900000);
    if(inputBox1.value==="Debmallya007" && inputBox2.value==="8536048110"){
validationCheck.style.display="inline";
alert(`Your Validation Code is:   ${randomNumber}`);
Login.disabled="true";  
inputBox1.disabled=true;
inputBox2.disabled=true
}else{
    msgBox.style.display="inline-block";
    firstDiv.style.display="none";
}
});
Retry.addEventListener("click",()=>{
    msgBox.style.display="none";
    firstDiv.style.display="block";
})

validationButton.addEventListener("click",()=>{
    validationButton.style.display="none";
    generationButton.style.display="inline";
if(validationCode.value==randomNumber){
    window.location.href="formpage.html";//this will go to the main page afterwards
firstDiv.style.display="none";
}else{
    validationCheck.after(newMsg);
    newMsg.innerText="Wrong Code,Try Again";
    newMsg.style.display="block";
}
});
generationButton.addEventListener("click",()=>{
    randomNumber = Math.floor(100000+Math.random() * 900000);
    alert(`Your Validation Code is:   ${randomNumber}`);
    generationButton.style.display="none";
    validationButton.style.display="inline";
    newMsg.style.display="none";
    validationCode.value="";
});

let red,green,blue=0;
dealSheet.style.backgroundColor=`rgb(${red},${green},${blue})`
setInterval(()=>{
    red=Math.round(Math.random()*254);
    green=Math.round(Math.random()*254);
    blue=Math.round(Math.random()*254);
dealSheet.style.backgroundColor=`rgb(${red},${green},${blue})`;
},2000);
Login.addEventListener("mouseenter",()=>{
    Login.style.cursor="pointer";
})

