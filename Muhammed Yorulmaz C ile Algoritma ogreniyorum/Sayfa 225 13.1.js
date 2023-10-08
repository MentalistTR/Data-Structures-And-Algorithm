function calculate() { 
let x = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
]

let y = prompt("lütfen aranacak sayiyi giriniz.");
document.write("<br>" + "dizi içerisinde aranacak sayiyi giriniz." + y);
for(let i=0;i<=x.length;i++) {
   

    for(let j=0;j<=x.length;j++) {
     if( y == x[i][j] ) {
        document.write("<br>" + "Girilen bu değer dizi içersinde vardir.")
        document.write("<br>" + "Girilen bu eleman bu dizinin" + i +"inci satır" + j +"inci sutunundadir.")
    } 
}
}
}

calculate();