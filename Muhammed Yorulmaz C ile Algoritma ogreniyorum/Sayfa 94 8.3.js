
const N = prompt("lütfen n degerini giriniz.");

if (N < 5) {
    console.log("Ufak veya hasarsız");
} else if(N >=5 && N< 5.5) {
    console.log("Az hasarli.");
} else if(N >=5.5 && N< 6.5) {
    console.log("Ciddi Hasar.");
}else if(N >=6.5 && N< 7.5) {
    console.log("Felaket.");
}else if(N > 7.5) {
    console.log("Facia.");
}