var sayilar= prompt("3 basamaklı sayi giriniz");

sayilar = sayilar.split('');
sayilar = sayilar.sort();
sayilar = sayilar.reverse();

document.write("<br>" + sayilar);

document.write("<br>" + sayilar[0] + sayilar[1] + sayilar[2] )

// document.write("<br>" +sayilar.sort(function(a,b){return a-b}));