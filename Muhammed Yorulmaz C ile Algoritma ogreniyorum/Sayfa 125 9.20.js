
let sayi;

for(let j=1; j<=15; j++) {
 sayi = Number(Math.pow(3,j));   
 if(sayi > 15000) {
    
    document.write("<br>" + Math.min(sayi));
    break;
 }


}
