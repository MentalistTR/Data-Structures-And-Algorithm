
var a=new Array();
for(var i=1;i<=5;i++) {
a[i]=Number(prompt(i+".nci sayiyi girin"));
   }

var b =new Array();
for(var i=1;i<=5;i++) {
b[i]=Number(prompt(i+".nci sayiyi girin"));
  
}
for(var i=1;i<=5;i++) {
if(a[i] == b[i]) {
    document.write("<br>" + a[i]);
    console.log(a[i]);
}
}

   // document.write(c);
   // console.log(c);