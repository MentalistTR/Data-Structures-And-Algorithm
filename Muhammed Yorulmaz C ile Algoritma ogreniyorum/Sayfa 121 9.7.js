var sayilar=new Array();
for(var i=1;i<=10;i++)
{
sayilar[i]=prompt(i+".nci sayıyı girin");
}
(sayilar.sort(function(a,b){return b-a}));
document.write("<br>" + sayilar[0] + "<br>" +  sayilar[1]);