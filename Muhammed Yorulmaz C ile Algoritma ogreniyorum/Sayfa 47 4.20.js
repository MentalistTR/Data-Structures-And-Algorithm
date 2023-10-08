let n = prompt(Number("lütfen n degerini giriniz"));
let toplam = 0;
for(i=1; i<=n; i++) {
    let sum = (i+1) / (i);
    toplam += sum;
    document.write("<br>" + toplam);
}
document.write("<br>" + toplam);
