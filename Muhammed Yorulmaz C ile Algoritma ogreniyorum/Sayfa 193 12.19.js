
var party = [1,2,3,4,5,6]
var oylar=new Array();
let sum = 0;
let oran1=0;
for(var i=0;i<=5;i++) {
oylar[i]=prompt(i+"1 ve 6 nolu partilerin oy sayisiini veriniz");
sum += Number(oylar[i]);
}
console.log(sum);
  oran1 = Number(oylar[0])/sum;
  oran1= Number(oran1.toFixed(2));
 
  let oran2 = Number(oylar[1])/sum;
 oran2= Number(oran2.toFixed(2));
 
 let oran3 = Number(oylar[2])/sum;
 oran3= Number(oran3.toFixed(2));
 
 let oran4 = Number(oylar[3])/sum;
 oran4= Number(oran4.toFixed(2));

 let oran5 = Number(oylar[4])/sum;
 oran5= Number(oran5.toFixed(2));
 
 let oran6 = Number(oylar[5])/sum;
 oran6= Number(oran6.toFixed(2));

document.write( "Partinin adı" + "     Oy Sayısı" + "    Oy oranı");
document.write("<br>" + "1 nolu parti" + oran1)
document.write("<br>" + "2 nolu parti" + oran2)
document.write("<br>" + "3 nolu parti" + oran3)
document.write("<br>" + "4 nolu parti" + oran4)
document.write("<br>" + "5 nolu parti" + oran5)
document.write("<br>" + "6 nolu parti" + oran6)

