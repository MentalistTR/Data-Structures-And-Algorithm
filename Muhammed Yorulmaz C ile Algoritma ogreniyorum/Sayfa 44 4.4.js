
var section = Number(prompt("Dersi ilk defa aldiysaniz 1, ikincikez alıyorsanız 2 seçin"));
if(section == 1) {

var vize1 = Number(prompt("lütfen vize1 sonucunu giriniz"));
var vize2 = Number(prompt("lütfen vize2 degerinizi giriniz"));
var final = Number(prompt("lütfen final degerinizi giriniz"));

let average_finalfirst = (((vize1+vize2) * (0.2)) ) + (((final) * (0.6)));

if(average_finalfirst < 60) {
    alert("kaldiniz");
} else if(average_finalfirst >=60) {
    alert("geçtiniz");
}

} else if (section ==2) {
    var vize1 = Number(prompt("lütfen vize1 sonucunu giriniz"));
var vize2 = Number(prompt("lütfen vize2 degerinizi giriniz"));
var final = Number(prompt("lütfen final degerinizi giriniz"));

let average_finalsecond = (((vize1+vize2) * (0.25)) ) + (((final) * (0.5)));

if(average_finalsecond < 60) {
    alert("kaldiniz");
} else if(average_finalsecond >=60) {
    alert("geçtiniz");
}

}






