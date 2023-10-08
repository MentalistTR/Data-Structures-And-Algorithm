function sade(sayi1,sayi2) {
    let ebob;
    let ekok;
    let kücüksayi = (sayi1 < sayi2) ? sayi1 : sayi2;

    for(let i=kücüksayi;i > 0; i--) {
        if(sayi1%i == 0 && sayi2 %i == 0) {
            ebob = i;
            break;
        }

    }
    document.write("<br>" + sayi2 + "/" + sayi1);
    document.write(("<br>" + sayi2/ebob)+ "/" + (sayi1/ebob));
    
   
}
sade(192,72);