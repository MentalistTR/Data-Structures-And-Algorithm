var n,sayac=0,i,j,k,l;
            
n=prompt("Dizinin Eleman Sayısını Girin");
var  dizi=new Array(n);        
for (i=0;i<n;i++)
{
dizi[i] = prompt("Dizinin Elemanlarını Sırayla Girin");

}
document.write("diziye girilen elemanlar="+ dizi +"<br>");
for( j=0;j<n;j++)
{
for( k=0;k<n;k++)
{
        if(dizi[j]==dizi[k])
        {
                            for( l=0;l<j;l++)
                            {
                                    if(dizi[l]==dizi[j])
                                    sayac=-1;
                            }
                            sayac++;
        }
}
if (sayac != 0)
   document.write(dizi[j] + " sayısı " + sayac + " kez tekrar edildi <br>");    
sayac=0;
}
