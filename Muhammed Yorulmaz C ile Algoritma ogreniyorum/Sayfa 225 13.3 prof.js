function calculate(sayi1,sayi2,sayi3,sayi4) {
    let a =0;

    let x = prompt("Saat yönü için 1,Tersi İçin 2");
    let y = Number(prompt("Çevrilme sayisi 1-4 arasi."));
    y = Number((y % 4));
    
    for(i=0;i<y;i++) { 
    if(x==1) { 

    a = sayi4;
    sayi4=sayi3;
    sayi3 = sayi2;
    sayi2 = sayi1;
    sayi1 = a;

    
    document.write("<br>" + sayi1,sayi2,sayi3,sayi4);

} if (x==2) {
  
  a = sayi1;
  sayi1= sayi2;
  sayi2 = sayi3;
  sayi3 = sayi4;
  sayi4 = a;
  

  document.write("<br>" + sayi1,sayi2,sayi3,sayi4);

}

    }

    }
    calculate(1,2,3,4);