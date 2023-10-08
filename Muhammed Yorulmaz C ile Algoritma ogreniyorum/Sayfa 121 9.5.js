let x = Number(prompt("lütfen toplanacak kare sayisini giriniz."));
let a = prompt("ilk karenin kenar uzunlugunu giriniz.");
let total_alan =0
for(i=x; i>=1; i--) {
    for(j=a; j>=1; j--) {
        a = a/2;
        let alan = Number(a*a);
        total_alan += alan;
    }
    
   
}
    
    document.write("<br>" + total_alan);



