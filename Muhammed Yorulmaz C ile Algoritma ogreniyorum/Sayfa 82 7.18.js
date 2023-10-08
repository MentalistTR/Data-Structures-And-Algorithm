let x = Number(prompt("Lütfen saniye degerini giriniz."));

let saniye = x

let dakika = saniye / 60;
saniye = saniye % 60;
saat = dakika / 60;
dakika = dakika % 60;


document.write("<br>" + saat);
document.write("<br>" + dakika);
document.write("<br>" + saniye);

console.log(saniye);
console.log(dakika);
console.log(saat);