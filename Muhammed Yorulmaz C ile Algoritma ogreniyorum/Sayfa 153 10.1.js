
function cekim_kuvveti(sayi1,sayi2) {
    
    let distance = Number(85.3);
    let cekimKuvveti = (6.673 * (Math.pow(10,-11)) * sayi1 * sayi2) / (distance) 
    document.write(cekimKuvveti); 
}
cekim_kuvveti(173,250);
