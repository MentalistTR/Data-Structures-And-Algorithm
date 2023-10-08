let type = prompt("Lütfen şeklin tipini seciniz." + "Daire ise 1 Dikdortgen ise 2 Kare ise 3");

if(type == 1) {
    let kenar_length = prompt("karenin 1 kenarini giriniz.");
    let area_kare = kenar_length * kenar_length;
    console.log(area_kare);

}else if(type == 2) {
    let kenar_length1 = prompt("dikdörtgenin 1. kenarini giriniz.");
    let kenar_length2 = prompt("dikdörtgenin 2. kenarini giriniz.");
    let area_dikdörtgen = kenar_length1 * kenar_length2;
    console.log(area_dikdörtgen);

    
} else if(type == 3) {
    let r = prompt("dairenin r degerini giriniz.");
    let area_daire = 3.14 * r*r ;
    console.log(area_daire);
    
} else if(type != 1,2,3 ) {
console.log("yanliş deger girdiniz.")
}