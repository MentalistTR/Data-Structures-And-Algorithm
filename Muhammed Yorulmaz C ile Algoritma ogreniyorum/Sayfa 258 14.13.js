let names = [];

for(var i=1;i<=10;i++) {
   names[i]=prompt(i+"inci ismi giriniz");
   if(names[i].slice(0,1) == names[i].slice(names[i].length-1,names[i].length) ) {
       document.write("<br>" + names[i]);
   }
   }
