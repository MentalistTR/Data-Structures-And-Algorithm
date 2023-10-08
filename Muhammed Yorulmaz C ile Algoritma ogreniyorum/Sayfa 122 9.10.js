let n = prompt("lütfen n degerini giriniz. ")
let x = prompt("lütfen x degerini giriniz. ")

for(i=1; i<=n; i++) {
    let formula = (1 - ((Math.pow(x,n)) + (Math.pow(x+1,n+1))));
    document.write(formula);
}

