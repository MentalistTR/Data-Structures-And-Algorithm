
function paraat () {
    let yazi=0;
    let tura =0;
    let x = prompt("lütfen kaç kez yazı tura atilacagini giriniz.");

    for(let i=1;i<=x; i++) {
        
        let sayi = Math.random();
        if(sayi <0.5) {
            tura++;
            
        } else if(sayi >=0.5 && sayi < 1) {
            yazi++;
            
        }
      
    }
    document.write("<br>" +  tura)
    document.write("<br>" +  yazi);

}
paraat();