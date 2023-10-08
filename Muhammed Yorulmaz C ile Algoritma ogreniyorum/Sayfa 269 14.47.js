let x ="bilgisayar";
x =x.split('')



let sayac1=0,sayac2=0,sayac3=0,sayac4=0,sayac5=0,sayac6=0,sayac7=0,sayac8=0;
let sayac = [sayac1,sayac2,sayac3,sayac4,sayac5,sayac6,sayac7,sayac8];

for(i=0;i< x.length;i++) {
    for(j=0;j <x.length;j++) {
        if(x[i] == x[j]) {
           sayac[i]++;
        }
       
    }
    
}

for(let k=0;k < x.length;k++) {
    document.write("<br>" + x[k] + "sayisi" + sayac[k] + "kadar kelimede gecmiştir.");
}





