let x = Number(prompt("lütfen 2 haneli bir sayi giriniz"));
let y = Number(prompt("lütfen 2 haneli bir sayi giriniz"));

if((x%2 == 1) &&(y%2 == 1)) {
    let sum1= Number(x + y); 
    console.log(sum1);

} else if((x%2 == 1) || (y%2 == 1)) {
    if(x>y) {
        let sum2 = Number(x - y); 
        console.log(sum2);

    } else if(y>x) {
        let sum3 = Number(x - y) ; 
        console.log(sum3);
    }

} else if((x%2 == 0) && (y%2 == 0) ) {
    let sum6 = x + y;
    console.log(sum6);
} 
else if((x%2 == 0) || (y%2 == 0)) {
    
    if(x<y) {
        let sum4 = Number(x - y); 
        console.log(sum4);

    } else{
        let sum5 = x - y ; 
        console.log(sum5);
    }
    
} 


