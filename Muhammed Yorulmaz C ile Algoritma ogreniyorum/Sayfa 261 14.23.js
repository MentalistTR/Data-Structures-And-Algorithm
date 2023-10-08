function calculate() {  
let x = "stop the bus!";
let sesli = ["a","e","o","u"]
let sessiz = ["b","c","d","f","g","h","j","k","l","m","n","p","r","s","t","v","y","z"]
let sesli_count =0;
let sessiz_count =0;
x = x.split('');

for(let i=0;i<=x.length;i++) {
   for(let j=1;j<=sesli.length;j++) {
    if(x[i] == sesli[j]) {
        sesli_count++;
    }
   }
}

for(i=0;i<=x.length;i++) {
    for(j=1;j<=sessiz.length;j++) {
     if(x[i] == sessiz[j]) {
         sessiz_count++;
     }
    }
 }

 document.write(sesli_count,sessiz_count);

}

calculate();