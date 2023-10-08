var sayilar=new Array();
for(var i=1;i<=10;i++) {

sayilar[i]=prompt(i+".nci sayıyı girin");
document.write(sayilar[i]+" " + "  " + " " + " ")
   for(j=1;j<=sayilar[i];j++) {
       document.write("*");
   }
  document.write("<br>")
}
