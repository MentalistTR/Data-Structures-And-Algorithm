function hesapla() {
    let y =0;
    var sayilar=new Array();
    for(var i=1;i<=3;i++)
    {
    sayilar[i]=prompt(i+".nci sayıyı girin");
    y = sayilar.sort(function(a,b){return a-b});
    
    
    }
    document.write(y[1]);
    // document.write("<br>" + sayilar[]);
    
}

hesapla();