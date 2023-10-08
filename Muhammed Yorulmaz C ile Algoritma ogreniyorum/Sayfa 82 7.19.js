let x = Number(prompt("Lütfen saat degerini giriniz."));
let y = Number(prompt("Lütfen dakika degerini giriniz."));
let z = Number(prompt("Lütfen saniye degerini giriniz."));

let x1 = x * 3600;
let y1 = y * 60;

console.log(x1);

let new_second = Number(prompt("Lütfen saniye degerini giriniz."));

new_second = new_second + x1 + y1 + z;
console.log(new_second);

let saniye = new_second;
let dakika = saniye / 60;
saniye = saniye % 60;
let saat = Math.floor(dakika / 60);
dakika = Math.floor(dakika % 60);

document.write("<br>" + saat);
document.write("<br>" + dakika);
document.write("<br>" + saniye);





