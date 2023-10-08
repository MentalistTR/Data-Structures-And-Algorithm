function calculate(saat,dakika) {
  
let kucuk_aci;
let buyuk_aci;

kucuk_aci = ((30*saat) - (5.5 * dakika));
buyuk_aci = 360 - kucuk_aci;

console.log(kucuk_aci);
console.log(buyuk_aci);
}

calculate(12,53);

