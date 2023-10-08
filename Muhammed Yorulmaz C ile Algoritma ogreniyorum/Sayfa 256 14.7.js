let x = prompt("lütfen bir kelime giriniz.")
let y = prompt("prompt")
x = x.split('');

y = y.split('');
y = y.reverse();

let count=0;
for(i=0;i<=x.length;i++) {
    if(x[i] != y[i]) {
        document.write("palindrome kelime degildir.")
        break;
    }  if(x[i] === y[i]) {
        count++;
    }
}


if(count == Number(x.length+1)) {
    document.write("palindrome kelimedir.");
}



// document.write("<br>" + y);
