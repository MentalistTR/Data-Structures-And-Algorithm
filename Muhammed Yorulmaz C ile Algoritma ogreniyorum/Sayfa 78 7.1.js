let r = prompt("Lütfen r değerini giriniz.");
let h = prompt("Lütfen h değerini giriniz.");

var taban_alani = ((r*r) * 3.14);
var hacim = ((1/3) * (taban_alani) * (h));

document.write( taban_alani);
document.write("<br>" +hacim);
