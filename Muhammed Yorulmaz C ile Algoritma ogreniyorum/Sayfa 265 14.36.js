let x = "bill102 final sinavi bitti"
x = x.split(' ');
let y =  "sinavi";

for(i=0;i<=x.length;i++) {
   if(x[i] == y) {
    document.write(i+1);
    break;
   }
}