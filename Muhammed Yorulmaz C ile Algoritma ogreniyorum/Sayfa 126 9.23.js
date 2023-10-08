let z =0;
let sum =0;
let hafif_siklet = 0;
let orta_siklet = 0;
let agır_siklet = 0;
var sayilar =new Array();
for(var i=1; i<=15; i++) {
    sayilar[i] =prompt(i+"Kilo Giriniz.");
    if(Number(sayilar[i]) < 50 ) {
    hafif_siklet += 1
    
    } else if(Number(sayilar[i]>=50 && Number(sayilar[i] < 70 ))) {
        orta_siklet += 1
    }

    else if(Number(sayilar[i]>70 ) )  {
        agır_siklet += 1
    }
    
    
    
    
    sum += Number(sayilar[i]);
    
   if(sayilar[i] == 0) {
    break;
  
   }
   

document.write("<br>" + " Girdiginiz Kilo" +  sayilar[i]); 
}
document.write("<br>" + (Number(hafif_siklet)-1) + "hafif");
document.write("<br>" + (Number(orta_siklet)) + "orta");
document.write("<br>" + (Number(agır_siklet)) + "agir");

document.write("<br>" + " Toplam" + Number((sayilar.length)-2) + " Adet sporcu girişlmiştir"); 
 document.write("<br>" + "Genel ortlama" + sum /Number((sayilar.length)-2) + "dir." );
 


   
 
   
   
   
  
  
   




