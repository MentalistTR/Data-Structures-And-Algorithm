let sum_vize = 0;
let p =0;
let y =0;


let x = prompt("lütfen ogrenci sayisini giriniz.")
for(i=1; i<=x; i++) {
    y = Number(prompt("lütfen" + i + "inci vize degerini giriniz."))
    document.write("<br>" + i +"inci ogrencinin vizesi" + y);
    sum_vize += y;
  
}


//console.log(sum_vize);

let sum_final = 0;
for(j=1; j<=x; j++) {
    
    let z = Number(prompt("lütfen" + j + "inci final degerini giriniz."))
    document.write("<br>" + j +"inci ogrencinin finali" + z);
    sum_final += z;
   
}
//console.log(sum_final);

let genel_ortalama = (((sum_final * 0.6) / x) + ((sum_vize * 0.4) / x ) ) / 25;
document.write("<br>" +"Genel ortalama" + genel_ortalama);


console.log(y);



