
function asalyaz(sayi1) {   
    for(let i=1; i<=sayi1; i++)
    {
      for (var bolum = 2; bolum < sayi1; bolum++)
        {
          if(sayi1 % bolum === 0) {
           
              break;
          
            }
        }
       
        if (sayi1 === bolum) { 
            console.log("bu bir asal sayidir.");
        } else {
            console.log("bu bir asal sayi degildir.");
        }
      
    }
        
    }
    asalyaz(23);