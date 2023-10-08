let x = 'ankara';
let kalin_count =0;
let ince_count =0;
x = x.split('');


for(let i=0;i<=x.length;i++) {
 if(x[i] == 'a' || x[i] == 'ı' || x[i] == 'o' || x[i] == 'u'  ) { 
    kalin_count++;
    }  else  if(x[i] == 'e' || x[i] == 'i' || x[i] == 'ö' || x[i] == 'ü'  ) { 
        ince_count++;
        } 

} 
console.log(ince_count);
console.log(kalin_count);

if(kalin_count > 0 && ince_count == 0) {
    document.write("uyar");
} else if(kalin_count == 0 && ince_count > 0) {
    document.write("uyar");
} else if(kalin_count == 0 && ince_count == 0) {
    document.write("uymaz");
}  else if(kalin_count > 0 && ince_count > 0) {
    document.write("uymaz");
} 
    