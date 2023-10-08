let x = Number(prompt("Lütfen üçgenin 3.açisini giriniz"))
let y = Number(prompt("Lütfen üçgenin 3.açisini giriniz"))
let z = Number(180 - (x + y));

if( x == y && y == z) {
    console.log("Eşkenar üçgen");
} else if (x==y || y==z || z==x) {
    console.log("İkizkenar üçgen");
} else if(x!=y && y!=z && x!=z) {
    console.log("Çeşitkenar üçgen");
}