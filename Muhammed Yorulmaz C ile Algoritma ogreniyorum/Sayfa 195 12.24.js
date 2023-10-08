function translate(x1,x2,x3,y1,y2,y3,z1,z2,z3) {
    let a = [
        [x1,x2,x3],
        [y1,y2,y3],
        [z1,z2,z3]
    ]

    let new_a = [
        [x1,y1,z1],
        [x2,y2,z2],
        [x3,y3,z3]
    ]

    console.log(a);
    console.log(new_a);

}

translate(2,1,7,6,4,0,8,3,0);