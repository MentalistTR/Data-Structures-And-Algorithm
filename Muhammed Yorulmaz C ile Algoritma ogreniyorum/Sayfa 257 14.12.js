let names = [];

for(var i=1;i<=10;i++) {
   names[i]=prompt(i+"inci ismi giriniz");
   if(names[i].slice(names[i].length-2,names[i].length) == 'an' ) {
       document.write("<br>" + names[i]);
   }
   }
