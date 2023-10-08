function calculate() {
    let r = 5;
    let xm = 5
    let ym = 5
    let x,y;

    x = Math.ceil(Math.random()*10)
    y = Math.ceil(Math.random()*10)

    let x_average = Math.pow((x-xm),2);
    let y_average = Math.pow((y-ym),2);
    let distance1 = Math.sqrt(x_average + y_average);
    if(distance1 <= r) {
        document.write(x,y);
    } else {
        calculate();
    }
    
  
}

calculate()