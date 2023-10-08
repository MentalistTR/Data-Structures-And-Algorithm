function ucgen() {   
let kenar = prompt("lütfen bir kenar uzunluğu giriniz.");

for(i=kenar ; i>=1; i--) {

for(j=kenar; j>=i; j--) {
    document.write("*");
} 
document.write("<br>");
}
}

function bosluk () {

 document.write("<br>");
 document.write("<br>");
}

function dikdortgen() {
    let kenar1 = prompt("lütfen bir kenar uzunluğu giriniz.");

for(i = 1;i <=kenar1;i++) {
    for(j=1;j<=kenar1;j++) {
        document.write("*");
        
        
    }
    document.write("<br>")
}
}

ucgen();
bosluk();
dikdortgen();
document.write("<br>")
ucgen();
document.write("<br>")
dikdortgen();