let slength,i,j,as,indis;

let string1= "abcdefghijklmnopqrstuvwxyz";
string1 = string1.split('');

let sifrelenecek = "redfox";
sifrelenecek = sifrelenecek.split('');

let sum = []
for(i=0; i<sifrelenecek.length;i++) {
    for(j=0;j<string1.length;j++) {
        if(sifrelenecek[i] == string1[j] ) {
            sifrelenecek[i] == string1[j+3]
            sum += string1[Number((j+3)%26)];
        }
       
 
    }
   

}
document.write("<br>" + sum);

