let promptInput = prompt("ismini gir","");
let myName = promptInput ? promptInput :"Misafir";
document.querySelector("#myName").innerHTML = myName;


let gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
function showTime(){
    let bugun = new Date();
    let saat = bugun.getHours();
    let dakika = bugun.getMinutes();
    let saniye = bugun.getSeconds();
    let gun = bugun.getDay();
    document.querySelector("#myClock").innerHTML =
    `${saat<10 ? "0"+saat : saat} : ${dakika<10 ? "0"+dakika : dakika} : ${saniye<10 ? "0"+saniye : saniye} &nbsp${gunler[gun]} `;

}
setInterval(showTime,1000);



