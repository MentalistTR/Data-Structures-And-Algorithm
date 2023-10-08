function distance(x1,y1,xm,ym,yaricap) {
    let x_average = Math.pow((x1-xm),2);
    let y_average = Math.pow((y1-ym),2);
    let distance1 = Math.sqrt(x_average + y_average);
    if(distance1 <= yaricap) {
        document.write("<br>" + "icinde")
    } else {
        document.write("<br>" + "disinda")
    }
    
}

distance(7,8,5,5,5);