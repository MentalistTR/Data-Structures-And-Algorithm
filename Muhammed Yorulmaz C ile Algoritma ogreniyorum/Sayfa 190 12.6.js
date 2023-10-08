let d = 0;
var a=new Array();
for(var i=1;i<=5;i++) {
a[i]=Number(prompt(i+".nci sayiyi girin"));
   }

var b =new Array();
for(var i=1;i<=5;i++) {
b[i]=Number(prompt(i+".nci sayiyi girin"));
   }
   var c = [(a[1]+b[1]),(a[2]+b[2]),(a[3]+b[3]),(a[4]+b[4]),(a[5]+b[5])];

   document.write(c);
   console.log(c);
