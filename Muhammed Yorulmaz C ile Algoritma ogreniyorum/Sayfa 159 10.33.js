let sum =0;
let sum1 =0;
function kontrol(sayi1,sayi2) {
     for(let i=1;i<sayi1;i++) {
          if(sayi1%i == 0) {
               sum +=i;
          }
         
     }
     document.write("<br>" +sum);

     for(let j=1;j<sayi2;j++) {
          if(sayi2%j == 0) {
               sum1 +=j;
          }
         
     }
     document.write("<br>" +sum1);

     if(sum == sayi2 && sum1 == sayi1) {
          document.write("<br>" + "1");
     } else{
          document.write("arkadaş sayi degildir.");
     }

}
kontrol(220,284)