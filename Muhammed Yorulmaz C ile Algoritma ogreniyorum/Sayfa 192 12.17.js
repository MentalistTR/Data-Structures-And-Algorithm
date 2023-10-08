var sayilar=new Array();
let sum =0;
let sum1=0;
let varyans=0;
let standart_sapma =0;

for(var i=0;i<10;i++) {
    sayilar[i]=prompt(i+".nci sayıyı girin");
    sum +=Number(sayilar[i]);
    }
    let sinif_ortalamasi = sum / 10;
    let eleman_sayisi = 9;
  
    
    for(var i=0;i<10;i++){
        sayilar[i] = Math.pow(((Number(sayilar[i]) - sinif_ortalamasi)),2)
        sum1 += Number(sayilar[i]);
    }
    document.write(sum1);
     
    varyans = sum1 / 9;

    standart_sapma = Math.sqrt(varyans);

    document.write("<br>" + standart_sapma);
    console.log(standart_sapma);
    

    for(i=0;i<10;i++) {
        if(sayilar[i] > sinif_ortalamasi + ((standart_sapma) * 1.5)) {
            document.write("<br>" + "A");
        } else if(sinif_ortalamasi + (0.5 *(standart_sapma)) <= sayilar[i] && sayilar[i] < (sinif_ortalamasi) + ((standart_sapma *1.5)  )) {
            document.write("<br>" + "B");
        } else if(sinif_ortalamasi - (0.5 *(standart_sapma)) <= sayilar[i] && sayilar[i] < (sinif_ortalamasi) + (standart_sapma *1.5)  ) {
            document.write("<br>" + "C");
        } else if(sinif_ortalamasi - (1.5 *(standart_sapma)) <= sayilar[i] && sayilar[i] < (sinif_ortalamasi) - (standart_sapma * 0.5)  ) {
            document.write("<br>" + "D");
        }  else if(sayilar[i] < sinif_ortalamasi - (standart_sapma) * 1.5) {
            document.write("<br>" + "F");
        } 
    }