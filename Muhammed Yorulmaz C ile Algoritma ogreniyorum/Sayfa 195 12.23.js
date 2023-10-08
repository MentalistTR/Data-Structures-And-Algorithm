function yazdirMayin() {
    let mayinSayac =0;
    let satirSayac =0;
    for(let satir =0;satir <9;satir++) {
        let rastgeleSayi = Math.ceil((Math.random()*10)-1);
        let rastgeleSayi2 = Math.ceil((Math.random()*10)-1);

        if(satir == 0) {
            document.write("&nbsp;&nbsp;");
        }
        if(satir-1 == (satirSayac)) {
            satirSayac++;
            document.write(satirSayac-1 + "&nbsp;");
        }
 
 
        for(let sutun =0; sutun <8; sutun++) {
            if(satir > 0 ) {
                if (rastgeleSayi == sutun && (mayinSayac <= 8))
                {
                    document.write("*" + "&nbsp;&nbsp;");
                    mayinSayac++;

                }
                else if((rastgeleSayi2 == sutun) && (mayinSayac <= 8))
                {
                    document.write("*" + "&nbsp;&nbsp;");
                    mayinSayac++;
                }
                else
                {
                    document.write("-" + "&nbsp;&nbsp;");
                }

                }
                if(satir == 0)
                {

                    document.write(sutun + "&nbsp;&nbsp;");
                }

                if(sutun == 7)
                {
                   //document.write("rastgeleSayi : " + rastgeleSayi + " " + "RastgeleSayi2 : " + rastgeleSayi2 + " " + "MayinSayac : " + mayinSayac)
				   document.write("<br>")

                  // document.writeln();
                }
        }

    }

}
  yazdirMayin();