function distance(x1,y1,x2,y2) {
    let x_average = Math.pow((x1-x2),2);
    let y_average = Math.pow((y1-y2),2);
    let distance1 = Math.sqrt(x_average + y_average);
    document.write((distance1));
}

distance(2,3,4,7);