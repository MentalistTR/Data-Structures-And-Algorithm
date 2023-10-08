var x = Number(prompt("deger giriniz."));
let sum =0;
for(let i=x; i<=1; i--) {
    let z =prompt(i+"Ölçüm giriniz.");
    
     sum += z;
}
console.log("<br>" + sum);
document.write("Ölçüm sayiniz:" + x + "<br>" + "Ara toplam:" +  sum);
