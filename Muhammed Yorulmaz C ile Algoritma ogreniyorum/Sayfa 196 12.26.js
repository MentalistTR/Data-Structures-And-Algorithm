function calculate(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12) {
    let y = [
        [x1,x2,x3],
        [x4,x5,x6],
        [x7,x8,x9],
        [x10,x11,x12]
    ]


    for(i=0;i<=3;i++) { 
    y[i].sort(function(a,b){return a-b});

     }
     
    document.write("<br>" + y[0]);
    document.write("<br>" + y[1]);
    document.write("<br>" + y[2]);
    document.write("<br>" + y[3]);

    console.log(y);
 


}

calculate(2,1,0,1,4,3,3,3,4,5,8,8); 