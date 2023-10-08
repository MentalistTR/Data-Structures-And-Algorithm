let x1 = Number(prompt("lütfen x1 degerini giriniz"));
let y1 = Number(prompt("lütfen y1 degerini giriniz"));

let x2 = Number(prompt("lütfen x2 degerini giriniz"));
let y2 = Number(prompt("lütfen y2 degerini giriniz"));

let x3 = Number(prompt("lütfen x3 degerini giriniz"));
let y3 = Number(prompt("lütfen y3 degerini giriniz"));

if(y2 == y3) {
    console.log("bu bir üçgendir.");
} else if(y1 == y3) {
    console.log("bu bir üçgendir.");
} else if(x1 == x3) {
    console.log("bu bir üçgendir.");
}
else if(x1 == x3) {
    console.log("bu bir üçgendir.")
} else if((x1 == x2) && (y2==y3)) {
    console.log("Bu bir üçgendir");
} else if((y1 == y2) && (x2==x3)) {
    console.log("Bu bir üçgendir");
} else if((x1 == x3) && (y2==y3)) {
    console.log("Bu bir üçgendir");
} else if((y1 == y3) && (x2==x3)) {
    console.log("Bu bir üçgendir");
} else {
    console.log("Üçgen degildir");
}