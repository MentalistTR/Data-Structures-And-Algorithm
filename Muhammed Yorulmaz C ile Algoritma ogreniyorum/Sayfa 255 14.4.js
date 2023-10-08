let x = 'Bill102 dErsini seViyoRum';
 x = x.split('');
 

//  if (x[1] = x[1].toLowerCase()) {     HOCAM KOD BURDA ÇALIŞIYOR
//     x[1] = x[1].toUpperCase();
//  }
// document.write(x[1]);

for(let i=1;i<=x.length;i++) {
   if(x[i] = x[i].toLowerCase()) {
    x[i] = x[i].toUpperCase();
    x.join(" "); 
   } else if(x[i] = x[i].toUpperCase()) {
    x[i] = x[i].toLowerCase();
   x.join(" "); 
}

}
document.write(x);
console.log(x);

