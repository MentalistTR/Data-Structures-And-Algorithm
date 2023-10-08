let x = "korkma sönmez bu şafaklarda yüzen al sancak sönmeden yurdumun üstünde tüten en son ocak o benim milletimin yildizidir parlayacak.";

let count=0;
 x = x.split(' ');

 for(let i=0;i<=200;i++) {
     for(let j=0;j<=x[i].length;j++) {
        if(x[i].slice(j,j+2) == 'ak') {
            count++;
        }
        
     }
     
 }
 document.write(count);
 console.log(count);
