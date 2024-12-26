//Here All the variables are define
let priceCheck=document.querySelector("#priceCheck");
let labelMobileNumber=document.querySelector("#labelMobileNumber");
let blankDealSheet=document.querySelector("#blankDealSheet");
let logout=document.querySelector("#logout");
let modeName=document.querySelector("#modeName");
let clockChanger=document.querySelector("#clockChanger");
let planet=document.querySelector("#planet");
let hourHand = document.querySelector("#hourHand");
let minuteHand = document.querySelector("#minuteHand");
let secondHand = document.querySelector("#secondHand");
let digitalClock=document.querySelector("#digitalClock");
let analogClock=document.querySelector("#analogClock");
let light = document.querySelector("#light");
let dark = document.querySelector("#dark");
let round=document.querySelector("#round");
let extraDetails=document.querySelector("#extraDetails");
let modeChanger=document.querySelector("#modeChanger");
let biggerButton=document.querySelector("#biggerButton");
let smallerButton=document.querySelector("#smallerButton");
let body=document.querySelector("body");
let formHeading = document.querySelector("#heading");
let no = document.querySelector("#NO");      // no button
let yes = document.querySelector("#YES");      // yes button
let okButton = document.querySelector("#okButton");
let msgBox = document.querySelector("#msgBoxFlex");   // this is the full msg box
let msgHeading = document.querySelector("#msgBox");   //this is the text inside msg box
let mobileNumber = document.querySelector("#mobileNumber");   //form page mobile number value
let newCreationButton = document.querySelector("#newCreationButton");   //this is the create new dealsheet button
let newFormCreation = document.querySelector(".newFormCreation");     //main 2 lines in the form page
let mainBody=document.querySelector("#mainBody");
let form=document.querySelector("form");
let anotherMessage = document.querySelector("#anotherMessage");
let firstMessage = document.querySelector("#firstMessage");
let loader = document.querySelector("#loader");

//Create New DealSheet Button Function
newCreationButton.addEventListener("click",()=>{
    mobileNumber.disabled="true";
    blankDealSheet.style.display="none";
    newCreationButton.disabled="true";
    if(mobileNumber.value>6000000000){
        msgBox.style.opacity="1";
        firstMessage.style.display="block";
        anotherMessage.style.display="none"
        okButton.style.display="none";
        yes.style.display="block";
        no.style.display="block";
    }else if(mobileNumber.value<6000000000||mobileNumber.value==""){
        firstMessage.style.display="none";
        msgBox.style.opacity="1";
       anotherMessage.style.display="block"; 
        mobileNumber.disabled="true";
        newCreationButton.disabled="true";
        okButton.style.display="block";
        yes.style.display="none";
        no.style.display="none";
    }
})
//If main body is clicked while the side page is opend , then side bar will auto close  
mainBody.addEventListener("focusin",()=>{
    extraDetails.style.width="0vw";
    biggerButton.style.display="inline";
    smallerButton.style.display="none";
    setTimeout(()=>{
        extraDetails.style.opacity="0";    
    },300);
})
//This function will change the mouse cursor into pointer
changeToMosuePointer=(element)=>{
element.style.cursor="pointer";
}
//calling above function for each element
logout.addEventListener("mouseenter",changeToMosuePointer(logout));
newCreationButton.addEventListener("mouseenter",changeToMosuePointer(newCreationButton));
no.addEventListener("mouseenter",changeToMosuePointer(no));
yes.addEventListener("mouseenter",changeToMosuePointer(yes));
okButton.addEventListener("mouseenter",changeToMosuePointer(okButton));
blankDealSheet.addEventListener("mouseenter",changeToMosuePointer(blankDealSheet));
biggerButton.addEventListener("mouseenter",changeToMosuePointer(biggerButton)); 
smallerButton.addEventListener("mouseenter",changeToMosuePointer(smallerButton));
round.addEventListener("mouseenter",changeToMosuePointer(round));
clockChanger.addEventListener("mouseenter",changeToMosuePointer(clockChanger));
priceCheck.addEventListener("mouseenter",changeToMosuePointer(priceCheck));
//logout to the main login page
logout.addEventListener("click",()=>{
    setTimeout(()=>{
        window.location.href="index.html";
    },1000);
}) 
//after clicking yes,redirect to formentry page
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let valMobile = mobileNumber.value;
    localStorage.setItem("mNumber",valMobile);
    msgBox.style.display="none";
    loader.style.display="flex";
    formHeading.textContent="PlEASE WAIT,YOUR FORM IS BEING LOADED"
    body.style.backgroundColor="#D3D3D3";
    setTimeout(()=>{
        window.location.href="formentrypage.html";
    },5000)
})
//define the blank deal sheet clicking incident
blankDealSheetClicking=()=>{
    loader.style.position="absolute"
    loader.style.top="30%";
    loader.style.display="flex";
    newFormCreation.style.display="none";
    blankDealSheet.style.display="none";
    newCreationButton.style.display="none";
    logout.style.display="none";
    biggerButton.style.display="none";
    let i=6;
    formHeading.textContent=`Your DEAL SHEET WILL BE READY IN ${i} seconds`;
    let estimatedTimeForFormLoading=setInterval(()=>{
        i--;
    formHeading.textContent=`Your DEAL SHEET WILL BE READY IN ${i} seconds`;
    },1000);
    formHeading.style.animation="none";
    localStorage.clear();
    setTimeout(()=>{
        window.open("pdf.html");
    },6000)
    setTimeout(()=>{
        clearInterval(estimatedTimeForFormLoading);
        formHeading.style.animation="headingAnimation 5s linear 0.2s infinite";
        formHeading.innerHTML="WELCOME DEBMALLYA ROY";
        loader.style.position="relative";
    loader.style.display="none";
    newFormCreation.style.display="flex";
    blankDealSheet.style.display="inline";
    newCreationButton.style.display="inline";
    logout.style.display="inline";
    biggerButton.style.display="inline";
    },6000)
}
//define the blank deal sheet creation using the above function defination
blankDealSheet.addEventListener("click",()=>{
  if(window.innerWidth<600){
    loader.style.left="27vw";
    blankDealSheetClicking();    
}else{
    loader.style.left="40vw";
    blankDealSheetClicking();
}
})
no.addEventListener("mousedown",()=>{
    msgBox.style.opacity="0";
    mobileNumber.value="";
    blankDealSheet.style.display="inline";
    mobileNumber.disabled=false
    newCreationButton.disabled=false;
    no.style.transform="translateY(3px)";
    
})
okButton.addEventListener("mousedown",()=>{
    msgBox.style.opacity="0";
    mobileNumber.value="";
    mobileNumber.disabled=false
    blankDealSheet.style.display="inline";
    newCreationButton.disabled=false;
    okButton.style.transform="translateY(3px)";
})
okButton.addEventListener("keypress",()=>{
    msgBox.style.opacity="0";
    mobileNumber.value="";
    mobileNumber.disabled=false
    blankDealSheet.style.display="inline";
    newCreationButton.disabled=false;
    okButton.style.transform="translateY(3px)";
})
no.addEventListener("keypress",()=>{
    msgBox.style.opacity="0";
    mobileNumber.value="";
    mobileNumber.disabled=false
    blankDealSheet.style.display="inline";
    newCreationButton.disabled=false;
    no.style.transform="translateY(3px)";
})
//bigger button clicking incident
biggerButton.addEventListener("click",()=>{
    if(window.innerWidth<600){
        extraDetails.style.position="absolute";
        extraDetails.style.left="0%"
        extraDetails.style.zIndex="2";
        extraDetails.style.width="50vw";    
        biggerButton.style.display="none";
        biggerButton.style.position="relative";
    smallerButton.style.position="absolute";
    smallerButton.style.display="inline";
    smallerButton.style.zIndex="3";
    setTimeout(()=>{
        extraDetails.style.opacity="1";    
    },250);
}
    else{
    extraDetails.style.width="30vw";
    biggerButton.style.display="none";
    biggerButton.style.position="relative";
    smallerButton.style.position="relative";
    smallerButton.style.display="inline";
    setTimeout(()=>{
    extraDetails.style.opacity="1";    
},250);
    }
})
//smaller button clicking incident
smallerButton.addEventListener("click",()=>{
    extraDetails.style.width="0vw";
    biggerButton.style.display="inline";

    smallerButton.style.display="none";
    setTimeout(()=>{
        extraDetails.style.opacity="0";    
    },300);
    setTimeout(()=>{
        biggerButton.style.position="absolute";
    },1000);
})
//digital clock function
digitalTime=()=>{
let dateTime=new Date();
let hour=String(dateTime.getHours()).padStart(2,"0");
let minute=String(dateTime.getMinutes()).padStart(2,"0");
let second=String(dateTime.getSeconds()).padStart(2,"0");
digitalClock.innerHTML=`${hour}:${minute}:${second}`;
}
setInterval(digitalTime,1000);
digitalTime();
//tooglebutton function for mode Changing
let moveableButton=false;
round.addEventListener("click",()=>{
if(window.innerWidth<600){
    if(!moveableButton){
        modeName.style.paddingLeft="0px";
        light.style.transform="scale(0)";
        light.style.fontSize="0px";
        light.style.width="0px";
        dark.style.transform="scale(1)";
        dark.style.fontSize="25px";
        dark.style.width="100%";
        dark.style.backgroundColor="#273e47";
        dark.style.color="white";
        dark.style.boxShadow="0px 0px 30px 10px Black";
        round.style.transform="translatex(205%) rotate(360deg)";
        modeChanger.style.backgroundImage="url(ButtonNight.jpg)";
        digitalClock.style.backgroundImage="linear-gradient(#384b70,#507687,#fcfaee,#b8001f)";
        planet.style.backgroundImage="url(moon.png)";
        round.style.backgroundImage="linear-gradient(#00ff9c,#b6ffa1,#feffa7,#ffe700)"; 
        setTimeout(()=>{
        mainBody.style.backgroundImage="url(mobileNight.jpg)"
        },1000);
    }else{
        light.style.transform="scale(1)";
        light.style.fontSize="25px";
        light.style.width="100%";
        dark.style.transform="scale(0)";
        dark.style.fontSize="0px";
        digitalClock.style.backgroundImage="linear-gradient(#4379F2,#FFEB00,#6EC207,#117554)";
        dark.style.width="0px";
        round.style.transform="translatex(-0%)";
        planet.style.backgroundImage="url(sun.png)";
        modeChanger.style.backgroundImage="url(ButtonDay.jpg)";
        round.style.backgroundImage="linear-gradient(#001f3f,#3a6d8c,#6a9ab0,#ead8b1)";
        setTimeout(()=>{
        body.style.backgroundImage="url(mobileDay.jpg)"
        },1000);
    }
}else{
    if(!moveableButton){
    modeName.style.paddingLeft="0px";
    light.style.transform="scale(0)";
    light.style.fontSize="0px";
    light.style.width="0px";
    dark.style.transform="scale(1)";
    dark.style.fontSize="25px";
    dark.style.width="100%";
    dark.style.backgroundColor="#273e47";
    dark.style.color="white";
    dark.style.boxShadow="0px 0px 30px 10px Black";
    round.style.transform="translatex(270%) rotate(360deg)";
    modeChanger.style.backgroundImage="url(ButtonNight.jpg)";
    digitalClock.style.backgroundImage="linear-gradient(#384b70,#507687,#fcfaee,#b8001f)";
    planet.style.backgroundImage="url(moon.png)";
    round.style.backgroundImage="linear-gradient(#00ff9c,#b6ffa1,#feffa7,#ffe700)"; 
    setTimeout(()=>{
    body.style.backgroundImage="url(Night.jpg)"
    },1000);
}else{
    light.style.transform="scale(1)";
    light.style.fontSize="25px";
    light.style.width="100%";
    dark.style.transform="scale(0)";
    dark.style.fontSize="0px";
    digitalClock.style.backgroundImage="linear-gradient(#4379F2,#FFEB00,#6EC207,#117554)";
    dark.style.width="0px";
    round.style.transform="translatex(-0%)";
    planet.style.backgroundImage="url(sun.png)";
    modeChanger.style.backgroundImage="url(ButtonDay.jpg)";
    round.style.backgroundImage="linear-gradient(#001f3f,#3a6d8c,#6a9ab0,#ead8b1)";
    setTimeout(()=>{
    body.style.backgroundImage="url(Day.jpg)"
    },1000);
}
}
moveableButton=!moveableButton;
})
//analog clock function define
analogTime=()=>{
    let analogDateTime=new Date();
    let analogHour=analogDateTime.getHours();
    let analogMinute=analogDateTime.getMinutes();
    let analogSecond=analogDateTime.getSeconds();
    let analogHourDegree=((analogHour/12)*360)+((analogMinute/60)*30);
    let analogMinuteDegree=((analogMinute/60)*360)+((analogSecond/60)*6);
    let analogSecondDegree=(analogSecond/60)*360;
    hourHand.style.transform=`rotate(${analogHourDegree}deg)`;
    minuteHand.style.transform=`rotate(${analogMinuteDegree}deg)`;
    secondHand.style.transform=`rotate(${analogSecondDegree}deg)`;
}
setInterval(analogTime,1000);
analogTime();
//clock changer button clicking defination
let isAnalogClockVisible=false;
clockChanger.addEventListener("click",()=>{
if(!isAnalogClockVisible){
    analogClock.style.display="inline";
    digitalClock.style.display="none";
    clockChanger.innerHTML="Change To Digital Clock";
}else{
    analogClock.style.display="none";
        digitalClock.style.display="inline";
        clockChanger.innerHTML="Change To Analog Clock";
}
isAnalogClockVisible=!isAnalogClockVisible;
})
priceCheck.addEventListener("mousedown",()=>{
    setTimeout(()=>{
    window.location.href='VehiclePriceCheck.html';
    },1000);
})