function hesapla() {
    var sayilar=new Array();
    for(var i=1;i<=3;i++)
    {
    sayilar[i]=prompt(i+".nci sayıyı girin");
    }
    if(sayilar[1] > sayilar[2] && sayilar[1] > sayilar[3]) {
        document.write(sayilar[1]);
    } else  if(sayilar[2] > sayilar[1] && sayilar[2] > sayilar[3]) {
        document.write(sayilar[2]);
    }  else if(sayilar[3] > sayilar[1] && sayilar[3] > sayilar[2]) {
        document.write(sayilar[3]);
    } else {
        document.write("ayni sayi girdiniz.");
    }
    
}

hesapla();
