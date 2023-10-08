let x = Number(prompt("kişi sayisi."));
let toplam=1;

for(let i=367 - Number(x);i<366; i++) {
    toplam = toplam * i/366 ;
    document.write("<br>" + (toplam));
}
document.write("<br>" + (toplam));