
    var y = new Array();
    var x=new Array();

    for(var i=1;i<=5;i++) {
x[i]=prompt(i+".nci sayiyi girin");
 
}
y = x.slice();

 y = y.sort(function(a,b){return a-b});
   if(y === x) {
  
  document.write("1");
  console.log("1");
} else {
    document.write("0")
    console.log("0");
}
 // DOĞRU YAPILMADI.
 

