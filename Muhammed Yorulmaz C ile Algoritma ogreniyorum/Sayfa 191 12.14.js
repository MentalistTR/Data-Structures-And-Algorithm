var sayilar=new Array();

for(var i=0;i<10;i++) {
    sayilar[i]=prompt(i+".nci sayıyı girin");
    }
    var max = Math.max(...sayilar)
    document.write("<br>" + max);
    let y = (100 - max);
    document.write("<br>" + y);
    let percentange = (y / max);
    document.write("<br>" + percentange);
    
 

    for(i=0;i<10;i++) {
    sayilar[i] = Number(sayilar[i]) + (Number(percentange) * Number(sayilar[i]));
    
    }
   console.log(sayilar);