var budget = Number(prompt("Lütfen ödenecek tutari giriniz."));

let gas = 304700;
let gas_tax = (gas) * (0.15);
let taken_gas = (budget) / ((gas_tax) + (gas));
let final = (budget) / (gas_tax);

document.write(taken_gas);
document.write("<br>" + final);