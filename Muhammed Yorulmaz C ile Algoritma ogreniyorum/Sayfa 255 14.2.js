let x = "Anastas mum satsana."
x = x.split('')
let count=0
for(i=0;i<= x.length;i++) {
    if(x[i] == 'A' || x[i] == 'a') {
        count++;
    }
   
}

document.write(count);


document.write(x.includes('A'));