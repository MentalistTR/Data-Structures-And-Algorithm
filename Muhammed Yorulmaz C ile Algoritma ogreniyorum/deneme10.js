let a = [2,2,3,4,4];

let sayac1 =0
let sayac2 =0
let sayac3 =0

for(let i =0; i<=a.length;i++) {
    if(a[0] == a[j]){
        sayac1++;
    }
}
for(let i =0; i<=a.length;i++) {
    if(a[2] == a[j]){
        sayac2++;
    }
}
for(let i =0; i<=a.length;i++) {
    if(a[3] == a[j]){
        sayac3++;
    }
}

if(sayac1 <= sayac2 && sayac1 <= sayac3 ) {
    document.write(a[0]);
}
if(sayac2 <= sayac3 && sayac2 <= sayac1 ) {
    document.write(a[2]);
}

if(sayac3 <= sayac1 && sayac3 <= sayac2 ) {
    document.write(a[4]);
}