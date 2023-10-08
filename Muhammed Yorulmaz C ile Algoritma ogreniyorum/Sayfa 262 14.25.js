let x = prompt("isim giriniz.");

for(i=0;i<=x.length;i++) {
    document.write("<br>" + x.slice(0,x.length-i));
}
