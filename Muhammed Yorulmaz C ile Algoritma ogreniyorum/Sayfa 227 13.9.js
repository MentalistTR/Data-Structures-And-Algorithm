function calculate(x2,y2) {
    var x1 = 2.5;
    var y1 = 2.5;

   let distance;

   distance = Math.sqrt((Math.pow(x1-x2,2)) + (Math.pow(y1-y2,2)));
   document.write(x2,y2,distance);
   console.log(x2,y2,distance);
}

calculate(7.5,6.5);