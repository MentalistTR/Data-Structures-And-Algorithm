let x = parseInt(prompt("lütfen sayi giriniz."));
let n1 = 0;
let n2 = 1;
let nextTerm;

for(i=1; i<=x; i++) {

    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm
    document.write("<br>" + n1);
}
