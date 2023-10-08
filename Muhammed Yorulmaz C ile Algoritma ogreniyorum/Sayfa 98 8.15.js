var cinsiyet = prompt("lütfen cinsiyetinizi giriniz.");
var kilo = prompt("lütfen kilonuzu giriniz");
var boy = Number(prompt("lütfen boy metre cinsinden giriniz."));

var VKİ = ((kilo) / (boy*boy));

if(cinsiyet == "erkek" && VKİ < 20.7) {
    document.write("Zayifsiniz. Saglik riski.")

} else if(cinsiyet == "erkek" && VKİ>=20.7 && VKİ < 26.4) {
    document.write("Normalsiniz risk yok.")

} else if(cinsiyet == "erkek" && VKİ>=26.5 && VKİ < 31.1) {
    document.write("Şişmansin")

} else if(cinsiyet == "erkek" && VKİ>=31.2) {
    document.write("Obezsin.")
}

else if(cinsiyet == "kadın" && VKİ < 20.7) {
    document.write("Zayifsiniz. Saglik riski.")

} else if(cinsiyet == "kadın" && VKİ>=20.7 && VKİ < 26.4) {
    document.write("Normalsin.")

} else if(cinsiyet == "kadın"&& VKİ>=26.5 && VKİ < 31.1) {
    document.write("Şşimansin.")

} else if(cinsiyet == "kadın" && VKİ>=31.2) {
    document.write("Obezsin.")
}
   
   

    
