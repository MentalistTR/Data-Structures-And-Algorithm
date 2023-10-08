
while(true)
{
    var sayi1 = prompt("lütfen 1. sayiyi giriniz.Ayni sayi girersen durur.");
    var sayi2;
    
    sayi2 = window.prompt("<br>" + "2.ci Sayı Girin, 1. sayiyi girerseniz durur.");
    sayi2=Number(sayi2);
   if(sayi2> sayi1) {
    document.write("<br>" + "Bir onceki sayiyi girerseniz durur." + "  artiyor")
   } else if( sayi2 < sayi1) {
    document.write("<br>" + "Bir onceki sayiyi girerseniz durur." + "  azaliyor.")
   } else if( sayi2 == sayi1) {
    document.write("<br>" + "sonlanndi.")
    break;
   }
    
}



