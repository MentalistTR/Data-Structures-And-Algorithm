let x1 = Number(prompt("lütfen x1 degerini giriniz"));
let y1 = Number(prompt("lütfen y1 degerini giriniz"));

if(x1>0 && y1>0) {
    console.log("1. bolgedesiniz.");
} else if (x1<0 && y1>0 ) {
    console.log("2.bolgedesiniz.");
}
else if (x1< 0 && y1<0 ) {
    console.log("3.bolgedesiniz.");
}
else if (x1>0 && y1<0 ) {
    console.log("4.bolgedesiniz.");
} else if(x1 == 0 && y1== 0) {
    console.log("orjindesiniz.");
}