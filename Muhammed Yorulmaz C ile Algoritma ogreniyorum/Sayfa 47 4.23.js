// 3 tane sınavın ortalaması geçer not olacak
// 60 > ise geçiyoruz
// girilen öğrenci sayisi ve her bir ogrencinin ortalaması hesapla. dersten gecen ogrenci sayisini bul

let ogrenciler=prompt(i + "ogrenci sayisini giriniz.");
document.write("<br> ogrenci sayisi:" + ogrenciler);
for(var i=0;i<ogrenciler.length;i++) {
}
for(i=1; i<ogrenciler.length; i++) { 
    
let sinav1,sinav2,sinav3 = Number(65);
let not_ortalamasi = Number((sinav1 + sinav2 + sinav3) / 3);
if(not_ortalamasi > 60) {
    document.write("<br> geçtiniz." + ogrenciler) ;
}else {
    document.write("<br> kaldiniz." + ogrenciler);
}
}

