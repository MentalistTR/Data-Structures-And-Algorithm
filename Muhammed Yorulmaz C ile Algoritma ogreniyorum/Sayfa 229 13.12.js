
function calculate(pay1,payda1,pay2,payda2) {

    let new_pay = ((payda2*pay1) + (payda1 * pay2))
let new_payda = (payda1*payda2);

document.write(new_pay + "/" + new_payda);
console.log(new_pay / new_payda);
}
calculate(4,5,6,7);