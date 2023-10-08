const a = [40,80,32,56,90,12,24,34,64,78];
let b;
b =a;
console.log(b);
document.write("<br>" + b);
let position_max,position_min,eklenecek 
let min = a[0];
let max = a[0];

for(var i =0;i<a.length;i++) {
    if ( min > a[i]) {
        min = a[i] ;
        position_min =i
       
    }

    if(max < a[i]) {
        max = a[i];
         position_max =i
    }
}

eklenecek = Number((100 - max) / max);


function calculate() { 
for(i=0;i<10;i++) {
    a[i] = Number(a[i]) + (Number(eklenecek) * Number(a[i]));
    
    }
document.write(Math.ceil(a));
console.log(a)
document.write("<br>" + b);
}

calculate();



