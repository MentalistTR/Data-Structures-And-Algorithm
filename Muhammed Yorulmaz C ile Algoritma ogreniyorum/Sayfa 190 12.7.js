function en_kucuk () {
    var a=new Array();
for(var i=1;i<=10;i++) {
a[i]=Number(prompt(i+".nci sayiyi girin"));
   }
  a[i] = a.sort(function(a,b){return a-b});
  document.write(a[0]);
}

en_kucuk ();