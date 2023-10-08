let x = prompt("sorunuzu giriniz.");

x = x.split(' ');
let number_x,number_x2;

number_x = x[0].slice(0,x[0].length-1)

number_x = Number(number_x) * 100;
console.log(number_x);