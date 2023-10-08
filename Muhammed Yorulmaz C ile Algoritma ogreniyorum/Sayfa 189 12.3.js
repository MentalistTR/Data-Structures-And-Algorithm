let sum =0;
let average =0;
var a=new Array();
for(var i=1;i<=5;i++) {
a[i]=Number(prompt(i+".nci sayiyi girin"));
sum += Number(a[i]);

   }
 average = sum / 5 ;
 for(i=1;i<=5;i++) {  
    if(a[i] > average) {
       console.log(a[i]);
    }
   }
 
 document.write(average);
 console.log(average);

 document.write("<br>" + sum);
 console.log(sum);
  
