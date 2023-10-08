function translate(x1,x2,x3,y1,y2,y3,z1,z2,z3) {
    let a = [
        [x1,x2,x3],
        [y1,y2,y3],
        [z1,z2,z3]
    ]

   let sum =0;
   sum = x1 + y2 + z3 + x3 + z1;

   
    console.log(sum);

}

translate(2,1,7,6,4,0,8,3,0);