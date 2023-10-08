 let names = [];

 for(var i=1;i<=10;i++) {
    names[i]=prompt(i+"inci ismi giriniz");
    if(names[i].slice(0,2) == 'me' ) {
        document.write("<br>" + names[i]);
    }
    }

