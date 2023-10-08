function calculate() {
    var a = [4,5,3,7,0,2,1,9,32,15];
    var b = [4,5,3,7,0,2,1,9,32,15];

    a.sort(function(a,b){return a-b});

    for(i=0;i<=a.length;i++) {
        if(a[0] == b[i]) {
            document.write("dizinin en kucuk elemanı" + i +"inci siradadir.")
        }
    }

    for(i=0;i<=a.length;i++) {
        if(a[1] == b[i]) {
            document.write("<br>" + "dizinin en kucuk elemanı" + i +"inci siradadir.")
        }
    }
  
}

calculate();

// 2. yöntem ////////////////////////////////////////////////////



const a = [40,80,32,56,90,12,24,34,64,78];

let position_max,position_min
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
document.write("=======" +"<br>");
for(var i=0;i<a.length;i++) {
    document.write(a[i] + "<br>");
}
document.write("====================================="+"<br>");
document.write("Dizi içindeki en büyük sayı: > > > " + max+"<br>");
document.write("Dizi içindeki en büyük sayı: > > > " + min+"<br>");
document.write(position_max)
document.write(position_min)
