let x = prompt("lütfen bir sayi giriniz.");
let sum =0;

for(i=0;i<=x.length;i++) {
    sum += Number((Math.pow(2,i)) * Number((x.slice(x.length-(i+1),x.length-i))))
}
document.write(sum);
console.log(sum);