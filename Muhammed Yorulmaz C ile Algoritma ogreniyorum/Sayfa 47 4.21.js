let x1 = prompt(Number("lütfen tamsayi giriniz "));
let x2 = prompt(Number("lütfen tamsayi giriniz "));
let x3 = prompt(Number("lütfen tamsayi giriniz "));
let x4 = prompt(Number("lütfen tamsayi giriniz "));
let x5 = prompt(Number("lütfen tamsayi giriniz "));
let x6 = prompt(Number("lütfen tamsayi giriniz "));
let x7 = prompt(Number("lütfen tamsayi giriniz "));
let x8 = prompt(Number("lütfen tamsayi giriniz "));
let x9 = prompt(Number("lütfen tamsayi giriniz "));
let x10 =prompt(Number("lütfen tamsayi giriniz "));

if(x1 >x2 && x1 > x3 && x1 > x4 && x1 > x5 && x1 > x6 && x1 > x7 && x1 > x8 && x1 > x9 && x1 > x10) {
    console.log(x1);
} else if(x2 >x1 && x2 > x3 && x2  > x4 && x2 > x5 && x2  > x6 && x2  > x7 && x2 > x8 && x2 > x9 && x2  > x10){ 
console.log(x2); }

// profosyonel versiyonu

var sayilar=new Array();
for(var i=0;i<10;i++)
{
sayilar[i]=prompt(i+".nci sayıyı girin");
}
document.write(sayilar.min(function(a,b){return a-b}));
document.write("en büyük eleman "+sayilar[9]+"en küçük eleman "+sayilar[0]);