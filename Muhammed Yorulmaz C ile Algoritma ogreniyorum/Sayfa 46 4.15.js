let x1 = Number(prompt("lütfen x1 degerini giriniz"));
let x2 = Number(prompt("lütfen x2 degerini giriniz"));
let x3 = Number(prompt("lütfen x3 degerini giriniz"));

if(x1 > x2 && x1 > x3 && x2 > x3 ) {
    
    console.log("x1 x2 x3");
} else if( x2 > x1 && x2 > x3 && x1 < x3) {
    console.log("x2 x1 x3");

} else if(x3 > x2 && x3 > x1 && x2 > x1) {
    console.log("x3 x2 x1");

}else if(x3 > x2 && x3 > x1 && x1 > x2) { 

console.log("x3 x1 x2");
}