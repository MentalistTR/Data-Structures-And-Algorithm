
function cevir(F) {
   C = ((F-32) / 180) * 100 ;
  document.write(C);
}
cevir(100);

function cevir1(C) {
    F = ((C * 1.8) + 32);
   document.write("<br>" + F);
 }
 cevir1(100);