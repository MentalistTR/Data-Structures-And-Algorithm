let kenar = prompt("lütfen bir kenar uzunluğu giriniz.");

for(i=kenar ; i>=1; i--) {

for(j=kenar; j>=i; j--) {
    document.write("*");
} 
document.write("<br>");
}
