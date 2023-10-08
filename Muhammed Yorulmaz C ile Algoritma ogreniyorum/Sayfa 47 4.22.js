var sayilar=new Array();
for(var i=0;i<10;i++)
{
sayilar[i]=prompt(i+".nci sayıyı girin");
}
document.write(sayilar.sort(function(a,b){return a-b}));
document.write("  en büyük eleman "+sayilar[9]+" en küçük eleman "+sayilar[0]);

let sum =  (sayilar[9] - (sayilar[0]));

 document.write("<br />" + sum);

