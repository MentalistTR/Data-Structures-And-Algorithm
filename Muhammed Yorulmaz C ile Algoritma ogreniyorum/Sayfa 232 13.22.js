function calculate() {
    const dizi = [-1,2,4,6,0,-2,0];
    let nSay=0;
    let pSay=0;
    let sSay=0;
    for(i=0;i<=dizi.length;i++) {
        if(Number(dizi[i]) > 0) {
            pSay++;
        }
     else if(Number(dizi[i]) < 0) {
        nSay++;
    }    else if(Number(dizi[i]) == 0) {
        sSay++;
    }
}
document.write(nSay,pSay,sSay);
console.log(nSay,pSay,sSay);
}

calculate();