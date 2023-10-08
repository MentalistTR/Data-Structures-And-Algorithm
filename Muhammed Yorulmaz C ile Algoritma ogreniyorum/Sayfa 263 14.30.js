let x = "sonra dedimki lan inek sen aptalmisin sinek kadar degerin yok";
let sansur = ["lan","inek","aptal"];
x = x.split(' ');

console.log(x.length);
console.log(sansur.length);

for(let i=0;i<x.length;i++) {
    for(let j=0;j<sansur.length;j++) {
        if(x[i] == sansur[j]) {
            x[i] = "*";
        }
    }
   
}

document.write(x);
console.log(x);