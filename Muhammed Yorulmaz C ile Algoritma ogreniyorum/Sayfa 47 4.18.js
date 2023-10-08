
let x = prompt(Number("lütfen 3 basamaklı bir sayı giriniz."));

if(x[0] == x[1] && x[0] == x[2] && x[1] == x[2]) {
    console.log("1");

} else if(x[0] != x[1] && x[0] != x[2] && x[1] != x[2]) {
    console.log("3");
}

else if(x[0] == x[1] && x[0] != x[2] && x[1] != x[2]) {
    console.log("2");

} else if(x[0] != x[1] && x[1] == x[2] && x[0] != x[2] ) {
    console.log("2"); 
}else if(x[0] != x[1] && x[1] != x[2] && x[0] == x[2] ) {
    console.log("2"); }
