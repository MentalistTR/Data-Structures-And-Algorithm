
function terscevir() {  
    let sayi1 = prompt("sayi gir.")
    sayi1 = sayi1.split('');
    sayi1 = sayi1.reverse();
  
    document.write(sayi1);
    console.log(sayi1);

}

terscevir();


// function hesapla(){
//     var reverse = 0;
//     sayi= prompt("asd")

//     while (sayi != 0)
//     {
//         reverse = reverse * 10;
//         reverse = reverse + sayi % 10;
//         sayi = Math.floor(sayi / 10);
//     }

//     document.write(reverse)
// }
// hesapla()