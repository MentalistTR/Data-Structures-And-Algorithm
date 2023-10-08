let sifat = ["bos","bu","su","o","bir","birkac"];
let ozne = ["bos","adam","cocuk","kus","kedi","araba"];
let tumlec = ["bos","sinif","kapan","orman","cayir","agac"];
let tumlec_ek = ["bos","a","dan","ın üstünden","ın altından","ın icinden"];
let yuklem = ["bos","atladi","kacti","zipladi","kostu","dustu"];


let cumle = [sifat[Math.ceil((Math.random()*5))],ozne[Math.ceil(Math.random()*6)],tumlec[Math.ceil(Math.random()*6)],tumlec_ek[Math.ceil(Math.random()*6)],yuklem[Math.ceil(Math.random()*6)]]

console.log(cumle);
document.write(cumle);