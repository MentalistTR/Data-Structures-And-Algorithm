function calculate(sayi1,sayi2,sayi3,sayi4) {

let D,F;
let x = prompt("Saay yönü için 1,Tersi İçin 0");
let y = Number(prompt("Çevrilme sayisi 1-4 arasi."));

if(x == 1 && y ==1) {
  document.write(sayi4,sayi1,sayi2,sayi3);
 console.log(sayi4,sayi1,sayi2,sayi3);
} else if(x ==1 && y==2 ) {
    document.write("<br>" + sayi3,sayi4,sayi1,sayi2);
 
} else if(x ==1  && y==3 ) {
    document.write("<br>" + sayi2,sayi3,sayi4,sayi1);
 
} else if(x ==1  && y==4 ) {
    document.write("<br>" + sayi1,sayi2,sayi3,sayi4);
 
} else if(x == 0 && y==1 ) {
    document.write("<br>" + sayi2,sayi3,sayi4,sayi1);
 
}
else if(x == 0 && y==2 ) {
    document.write("<br>" + sayi3, sayi4,sayi1,sayi2);
 
}
else if(x == 0 && y==3 ) {
    document.write("<br>" + sayi4,sayi1,sayi2,sayi3);
 
}
else if(x == 0 && y==4 ) {
    document.write("<br>" + sayi1,sayi2,sayi3,sayi4);
 
} else {
    document.write("wrong")
}


}
calculate(1,2,3,4);








