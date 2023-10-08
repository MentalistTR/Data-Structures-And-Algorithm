function mukemmelyaz(sayi1) { 

    for(let i=1; i<=sayi1 ; i++) {
    
          let toplam = 0;
    
          for(let j=1; j<sayi1; j++) {
            if(sayi1 % j == 0) {
                toplam += j;
            }
          }
    
          if(toplam == sayi1) {
            console.log("1" + " mükemmel bir sayidir");
          } else {
            console.log("0" + "degildir.")
          }
    
    }
    }
    mukemmelyaz(6)