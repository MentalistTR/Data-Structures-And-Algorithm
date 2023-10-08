let x = "bugun hava sicakligi hava raporundaki gibidir havayolu sirketleri antalya havalimanina ek seferler düzenliyorlar"
x = x.split(' ');
let y = "hava";
let count =0;

for(let i=0; i<=x.length;i++) {
    if(x[i] == y) {
        count++;
    }
    
}
document.write(count);