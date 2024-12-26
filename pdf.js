let dealSheet=document.querySelector("#dealSheetHeading");
let customerName=document.querySelector("#customerName");
let modelName=document.querySelector("#modelName");
let variantName=document.querySelector("#variantName");
let color=document.querySelector("#color");
let sourceEnq=document.querySelector("#sourceEnq");
let mobile=document.querySelector("#mobile");
let finance=document.querySelector("#finance");
let exShowRoom=document.querySelector("#exShowRoom");
let schemeDiscount=document.querySelector("#schemeDiscount");
let registration=document.querySelector("#registration");
let insurance=document.querySelector("#insurance");
let TCS=document.querySelector("#TCS");
let accessories=document.querySelector("#accessories");
let shield=document.querySelector("#shield");
let RSA=document.querySelector("#RSA");
let SLD=document.querySelector("#SLD");
let exchangeVehicle=document.querySelector("#exchangeVehicle");
let exchange=document.querySelector("#exchange");

customerName.textContent=localStorage.getItem("pdfCustomerName");
modelName.textContent=localStorage.getItem("pdfModelName");
variantName.textContent=localStorage.getItem("pdfVariantName");
color.textContent=localStorage.getItem("pdfColor");
sourceEnq.textContent=localStorage.getItem("pdfEnqSource");
mobile.textContent=localStorage.getItem("pdfMobile");
finance.textContent=localStorage.getItem("pdfFinance");
exchange.textContent=localStorage.getItem("pdfExchange");
exShowRoom.textContent=localStorage.getItem("pdfExShowRoom");
schemeDiscount.textContent=localStorage.getItem("pdfSchemeDiscount");
registration.textContent=localStorage.getItem("pdfRegistration");
insurance.textContent=localStorage.getItem("pdfInsurance");
TCS.textContent=localStorage.getItem("pdfTCS");
accessories.textContent=localStorage.getItem("pdfAccessories");
shield.textContent=localStorage.getItem("pdfShield");
RSA.textContent=localStorage.getItem("pdfRSA");
SLD.textContent=localStorage.getItem("pdfSLD");
exchangeVehicle.textContent=localStorage.getItem("pdfExchangeVehicle");
let pdfName=customerName.textContent.toUpperCase();
let save=document.querySelector("#save");

save.addEventListener("mouseenter",()=>{
    save.style.cursor="pointer";
})


window.addEventListener("load",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
})
save.addEventListener("click",()=>{
    const { jsPDF } = window.jspdf;
    const doc=new jsPDF("p","mm","a4");
    doc.setFontSize(30);
    doc.setFont("Times New Roman","bold");
doc.text("S.N MOTORS PVT. LTD.",47,15);
doc.setLineWidth(1.3);
doc.line(5,5,205,5);
doc.line(5,5,5,290);
doc.line(5,290,205,290);
doc.line(205,5,205,290);
doc.setFillColor(211,211,211);
doc.setLineWidth(0.4);
doc.roundedRect(78,21.5,58,10,5,5,"DF");
doc.setLineDash([1.5,1]);
doc.setLineWidth(1.3);
doc.line(47,19,165,19); 
doc.setLineWidth(0.7);
doc.line(5,5,205,5);
doc.line(5,5,5,290);
doc.line(5,290,205,290);
doc.line(205,5,205,290);
doc.setFillColor(211,211,211);
doc.setLineWidth(0.4);
doc.roundedRect(78,21.5,58,10,5,5,"DF");
doc.setFontSize(25);
doc.text("DEAL SHEET",79,29);
doc.setFontSize(15);
doc.setFont("Times New Roman","normal");
doc.text("CUSTOMER NAME:",10,50);
doc.text(`${customerName.textContent.toUpperCase()}`,70,50);
doc.text("MODEL NAME:",10,62);
doc.text(`${modelName.textContent.toUpperCase()}`,64,62);
doc.text("VARIANT:",10,74);
doc.text(`${variantName.textContent.toUpperCase()}`,48,74);
doc.text("COLOUR:",130,74);
doc.text(`${color.textContent.toUpperCase()}`,155,74);
doc.text("SOURCE OF ENQ:",10,86);
doc.text(`${sourceEnq.textContent.toUpperCase()}`,65,86);
doc.text("MOBILE:",130,86);
doc.text(`${mobile.textContent.toUpperCase()}`,160,86);
doc.text("EXCHANGE VEHICLE IF ANY:",10,98);
doc.text(`${exchange.textContent.toUpperCase()}`,105,98);
doc.text("FINANCE:",10,110);
doc.text(`${finance.textContent.toUpperCase()}`,90,110);


doc.setFontSize(12);
doc.text("THE FOLLOWING PACKAGES HAS BEEN OFFERED TO THE ABOVE CUSTOMER:",10,120);
doc.setFontSize(15);
doc.text("EX-SHOWROOM PRICE:",10,132);
if(exShowRoom.textContent==0||exShowRoom.textContent==""){
    doc.text("",10,168);
}else{
doc.text(`${exShowRoom.textContent.toUpperCase()}/-`,95,131);
}

doc.text("SCHEME DISCOUNT:",10,144);
if(schemeDiscount.textContent==0||schemeDiscount.textContent==""){
    doc.text("",10,168);
}else{
doc.text(`${schemeDiscount.textContent.toUpperCase()}/-`,90,144);
}

doc.text("REGISTRATION:",10,156);
if(registration.textContent==0||registration.textContent==""){
doc.text("",90,156);    
}else{
doc.text(`${registration.textContent.toUpperCase()}/-`,90,156);
}

doc.text("INSURANCE:",10,168);
if(insurance.textContent==0||insurance.textContent==""){
    doc.text("",10,168);
}else{
doc.text(`${insurance.textContent.toUpperCase()}/-`,90,168);
}

doc.text("TCS:",10,180);
if(TCS.textContent==0||TCS.textContent==""){
    doc.text("",10,168);
}else{
doc.text(`${TCS.textContent.toUpperCase()}/-`,90,180);
}

doc.text("ACCESSORIES:",10,192);
if(accessories.textContent==0||accessories.textContent==""){
    doc.text("",10,168);
}else{
doc.text(`${accessories.textContent.toUpperCase()}/-`,90,192);
}

doc.text("SHIELD:",10,204);
if(shield.textContent==0||shield.textContent==""){
    doc.text("",10,168);
}else{
doc.text(`${shield.textContent.toUpperCase()}/-`,90,204);
}

doc.text("RSA:",10,216);
if(RSA.textContent==0||RSA.textContent==""){
    doc.text("",10,168);
}else{
doc.text(`${RSA.textContent.toUpperCase()}/-`,90,216);
}

doc.text("SLD & VLTD:",10,228);
if(SLD.textContent==0||SLD.textContent==""){
    doc.text("",10,168);
}else{
doc.text(`${SLD.textContent.toUpperCase()}/-`,90,228);
}

doc.text("EXCHANGE VEHICLE:",10,240);
if(exchangeVehicle.textContent==0||exchangeVehicle.textContent==""){
    doc.text("",10,168);
}else{
doc.text(`${exchangeVehicle.textContent.toUpperCase()}/-`,90,240);
}
doc.setFontSize(12);
doc.text("SIGNATURE OF SALE",12,270);
doc.text("SIGNATURE OF",90,270);
doc.text("SIGNATURE OF GENERAL",150,270);
doc.text("CONSULTANT",19,275);
doc.text("CUSTOMER",94,275);
doc.text("MANAGER",165,275);
//doc.setLineWidth(1);
//doc.setLineDash([0.1,0.5]);
doc.line(9,265,57,265);
doc.line(83,265,127,265);
doc.line(147,265,203,265);
doc.setLineWidth(0.5);
doc.setLineDash([0.3,0.5]);
doc.line(154,75,203,75);
doc.line(153,88,203,88);
doc.line(60,51,203,51);
doc.line(49,63,203,63);
doc.line(38,75,125,75);
doc.line(55,87,125,87);
doc.line(85,99,203,98);
doc.line(38,112,203,112);
doc.line(70,133,203,133);
doc.line(63,145,203,145);
doc.line(52,158,203,158);
doc.line(44,169,203,169);
doc.line(25,181,203,181);
doc.line(49,194,203,194);
doc.line(32,205,203,205);
doc.line(25,217,203,217);
doc.line(44,229,203,229);
doc.line(67,241,203,241);





doc.save(`${pdfName} DEAL SHEET.pdf`);
    
});