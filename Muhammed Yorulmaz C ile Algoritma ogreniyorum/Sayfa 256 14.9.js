let x = "bilgisayar yazilimi dersinin vizesi yapilacaktir"
x = x.split('');

let a ="abcdefghijklmnopqrstuvwxyz";
a = a.split('');
let sum =0;

for(let i=0;i<x.length;i++) {
   for(let j=0;j<a.length;j++) {
    if(x[i] == a[j]) {
        x[i] == a[Number((j+3))];
        sum += a[Number((j+3)%26)]
    }
   
   }
 
}

document.write(sum);