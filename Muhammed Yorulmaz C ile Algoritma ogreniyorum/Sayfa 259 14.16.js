let dizi1 = [];
let dizi2 = [];
let yedek;

for(let i=0;i<=4;i++) {
    dizi1[i]=prompt(i+"inci ismi giriniz");
    dizi2[i] = prompt(i+"inci notu giriniz");
    }

    for(j=0;j<=dizi2.length;j++) { 
    if(dizi2[j]<dizi2[j+1]){

        yedek = dizi2[j];

        dizi2[j] = dizi2[j+1];

        dizi2[j+1] = yedek;

        yedek = dizi1[j];

        dizi1[j] = dizi1[j+1];

        dizi1[j+1] = yedek;

     }
     
    }
    
   

    
