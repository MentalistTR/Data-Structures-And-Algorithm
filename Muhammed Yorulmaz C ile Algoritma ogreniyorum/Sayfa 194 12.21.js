function calculate(x1,y1,z1,x2,y2,z2,x3,y3,z3) {
    let x = [
        [x1,y1,z1],
        [x2,y2,z2],
        [x3,y3,z3]
    ];
    let y = [
        [x1+y1+z1],
        [x2+y2+z2],
        [x3+y3+z3] ];
        
    document.write("<br>" + y);
    document.write("<br>" + y.reverse());
}
calculate(2,1,0,1,4,3,5,3,0)