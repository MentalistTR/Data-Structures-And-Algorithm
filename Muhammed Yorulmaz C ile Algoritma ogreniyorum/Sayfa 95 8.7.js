var sayilar=new Array();
for(var i=1;i<4;i++)
{
sayilar[i]=prompt(i+".nci sayıyı girin");
}
document.write(sayilar.sort(function(a,b){return b-a}));


