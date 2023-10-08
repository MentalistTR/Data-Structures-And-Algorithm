function hesapla() {
    let y =0;
    var sayilar=new Array();
    for(var i=1;i<=3;i++)
    {
    sayilar[i]=prompt(i+".nci sayıyı girin");
    if(sayilar[i] % 2 == 0) {
     y = sayilar[i];
     y = y.split('');
     document.write("<br>" + y.reverse());
    
    }
    
    }
    

    
    
    // document.write("<br>" + sayilar[]);
    
}

hesapla();