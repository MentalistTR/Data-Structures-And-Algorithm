function ebobekok(sayi1,sayi2) {
    let ebob;
    let ekok;
    let kücüksayi = (sayi1 < sayi2) ? sayi1 : sayi2;

    for(let i=kücüksayi;i > 0; i--) {
        if(sayi1%i == 0 && sayi2 %i == 0) {
            ebob = i;
            break;
        }

    }
    ekok = (sayi1 * sayi2) / ebob;
    console.log("Ebob : " + ebob + " Ekok : " + ekok);
    document.write((sayi1/ebob) + "/" + asayi2/ebob);
}
ebobekok(120,150);