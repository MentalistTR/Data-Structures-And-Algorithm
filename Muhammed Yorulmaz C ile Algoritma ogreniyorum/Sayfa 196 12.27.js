function calculate(x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15,x16,x17,x18,x19,x20,x21,x22,x23,x24,x25) {
    let y = [
        [x1,x2,x3,x4,x5],
        [x6,x7,x8,x9,x10],
        [x11,x12,x13,x14,x15],
        [x16,x17,x18,x19,x20],
        [x21,x22,x23,x24,x25]
    ]
     
    let t = [x10,x14,x15,x18,x19,x20,x22,x23,x24,x25]
   
    t.sort(function(a,b){return a-b});
    console.log(t[0]);


}

calculate(5,1,11,-9,4,0,2,7,2,5,15,3,-1,-6,9,4,1,2,3,4,2,3,0,4,1); 