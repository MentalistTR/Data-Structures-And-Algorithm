a = [4,5,3,7,0];
b = [1,1,0,5,6];

function ekle() {
    let new_a =a;
    let new_b = b;
   
    new_a = new_a.concat(new_b);
    console.log(new_a)
}

ekle();