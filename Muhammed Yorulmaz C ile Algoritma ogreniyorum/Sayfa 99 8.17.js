const sayi = Number(prompt("lütfen 5 haneli bir sayi giriniz"));

let onbinler,binler,yüzler,onlar,birler;

onbinler = Math.floor(sayi / 10000);
let onbinler1 = sayi / 10000;

binler = Math.floor((sayi-(onbinler * 10000)) / 1000);
let binler1 = (sayi-(onbinler * 10000)) / 1000;

yüzler = (sayi % 10000)
let yüzler1 = yüzler % 1000;
let yüzler2 = Math.floor(yüzler1 / 100);  

yüzler = (sayi % 10000)
yüzler1 = yüzler % 1000;
yüzler2 = (yüzler1 % 100);  

 onlar = Math.floor(yüzler2 / 10);


birler = Math.floor(sayi % 10);

document.write("<br>" + birler);

let yuvarla = (sayi -(onbinler * 10000)-(binler*1000));

if(yuvarla >= 500) {
    binler = binler +1;
    yuzler2 =0;
    onlar =0;
    birler =0;
    document.write("<br>" + onbinler,binler,yuzler2,onlar,birler);
} else if(yuvarla < 500) {
    yuzler2 =0;
    onlar =0;
    birler =0;

    document.write("<br>" + onbinler,binler,yuzler2,onlar,birler);

}



