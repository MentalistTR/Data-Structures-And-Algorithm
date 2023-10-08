var depo =0;
 
while(true) {
  
var x = Number(prompt("lütfen operatör seçiniz + için 0, - için 1, üs alma için 2, çarpma için 3, bölme için 4,mod için 5,çikiş için 6"));
 if(x==6) {
    break;
  }
  var y = Number(prompt("lütfen yapmak istediginiz sayiyi giriniz."));
 
  if(x == 0) {
    depo = Number(depo) + Number(y);
   
  } else  if(x == 1) {
    depo = Number(depo) - Number(y);;
  } else  if(x == 2) {
    depo = (Math.pow(Number(depo),Number(y)));
  }else  if(x == 3) {
    depo = Number(depo *y);
  }else  if(x == 4) {
    depo = (Number(depo)/Number(y));
  }else  if(x == 5) {
    depo = (Number(depo)  % Number(y));
  } 
  
  document.write("<br>" + depo);
  console.log(depo);

}


