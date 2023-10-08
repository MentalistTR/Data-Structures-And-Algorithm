function calculate(pay1,payda1,pay2,payda2) {
    let x = pay1 / payda1;
    let y = pay2 / payda2;

    if(x > y) {
        document.write(x);
    } else if(y > x) {
        document.write(y);

    } else {
        document.write("sayilar eşit.");
    }
}
calculate(2,5,1,3);
