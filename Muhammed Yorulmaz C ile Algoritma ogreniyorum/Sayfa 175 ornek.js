let sum =0;
let average =0;


var sayilar=new Array();
for(var i=0;i<10;i++) {
sayilar[i]=prompt(i+".nci sayıyı girin");

sum += Number(sayilar[i]);
average = sum / 10;
}
document.write("<br" + sum);
console.log(sum);
console.log(average);

for(i=0;i<10;i++) {  
 if(sayilar[i] > average) {
    console.log(sayilar[i]);
 }
}

