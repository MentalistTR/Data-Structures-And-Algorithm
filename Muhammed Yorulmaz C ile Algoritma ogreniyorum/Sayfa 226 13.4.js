function calculate() {

    let sayi = prompt("asdsad")
    let tek=0;
    let cift =0;
    sayi.toString('');
    for(let i=0;i<=sayi.length;i++) {
      if(sayi[i]%2 == 0) {
        cift++;
      } else if(sayi[i] %2 == 1) {
        tek++;
      }
    }
 document.write(sayi +"sayisi içinde" +  tek +  "adet tek" + cift + " adet de" + "cift rakam vardir.")

}



calculate();