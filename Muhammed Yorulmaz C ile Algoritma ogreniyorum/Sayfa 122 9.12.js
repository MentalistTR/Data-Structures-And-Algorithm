var sayi =1;
for(sayi=1; sayi<true ; sayi++) {

      let toplam = 0;

      for(i=1; i<sayi; i++) {
        if(sayi % i == 0) {
            toplam += i;
        }
      }

      if(toplam == sayi) {
        console.log(sayi + " mükemmel bir sayidir");
        
      }

}

