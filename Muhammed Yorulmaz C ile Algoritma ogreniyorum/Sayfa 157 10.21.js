function buyukTarih() {
  
    let gun = prompt("lütfen gun tarihini giriniz.");
    let ay =  prompt("lütfen ay tarihini giriniz.");
    let yil = prompt("lütfen yil tarihini giriniz.");

    let gun1 = prompt("lütfen gun tarihini giriniz.");
    let ay1 =  prompt("lütfen ay tarihini giriniz.");
    let yil1 = prompt("lütfen yil tarihini giriniz.");

    if(gun > gun1) {
        document.write(" "+ gun);
    } else if(gun1 > gun) {
        document.write(" "+ gun1);

    } else {
        document.write(" "+ gun)
    }

    if(ay > ay1) {
        document.write(" "+ ay);
    } else if(ay1 > ay) {
        document.write(" "+ ay1);

    } else {
        document.write(" "+ ay)
    }

    if(yil > yil1) {
        document.write(" "+ yil);
    } else if(yil1 > yil) {
        document.write(" "+ yil1);

    } else {
        document.write(" "+ yil1)
    }

}

buyukTarih();

