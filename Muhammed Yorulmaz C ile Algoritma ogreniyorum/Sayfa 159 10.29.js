function hesapla() {
    agirlik = prompt("lütfen agirliginizi giriniz.");
    boy = prompt("boy giriniz.");
    let bsa = Math.pow(boy,0.725) * Math.pow(agirlik,0.425) * 71.84 * (Math.pow(10,-4))
    document.write(bsa + "metrekaredir.");
}

hesapla();