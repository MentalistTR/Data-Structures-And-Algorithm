
const km_tuketim = 0.1;
const liter1 =2.08;
const distance =1000;

let spent_liter = (Number(distance) * Number(km_tuketim));
let cost = (Number(spent_liter) * (Number(liter1)));

document.write(cost);