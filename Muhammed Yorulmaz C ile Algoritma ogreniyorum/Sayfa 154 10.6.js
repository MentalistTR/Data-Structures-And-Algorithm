function mukemmelyaz (sayi1,sayi2) { 

for(sayi1; sayi1<= sayi2 ; sayi1++) {

      let toplam = 0;

      for(i=1; i<sayi1; i++) {
        if(sayi1 % i == 0) {
            toplam += i;
        }
      }

      if(toplam == sayi1) {
        console.log(sayi1 + " mükemmel bir sayidir");
        
      }

}
}
mukemmelyaz(1,1000)
