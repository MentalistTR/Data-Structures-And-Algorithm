
function ayristir(x) { 

let saniye = x

let dakika = saniye / 60;
saniye = saniye % 60;
saat = dakika / 60;
dakika = dakika % 60;


document.write("<br>" + Math.floor(saat) + "saat");
document.write("<br>" + dakika + "dakika");
document.write("<br>" + saniye + "saniye");

console.log(saniye);
console.log(dakika);
console.log(saat);

}
ayristir(7350);