var sayilar=new Array();
let tane1 =0;

for(var i=0;i<10;i++) {
sayilar[i]=prompt(i+".nci sayıyı girin");
}

let aranacak = prompt("aranacak sayiyi giriniz.");

for(i=Number(sayilar[0])-1;i<=Number(sayilar[1]);i++) {

    if(sayilar[i] == aranacak) {
       tane1++;
    } 

}
document.write(tane1);



console.log(sayilar);
