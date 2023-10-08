var n,sayac=0,i,j,k,l;
            
let x ="bilgisayar";
x =x.split('')

let y ="abcdefghijklmnopqrstuvwxyz";
y=y.split('');
document.write("diziye girilen elemanlar="+ x +"<br>");
for( j=0;j<x.length;j++)
{
for( k=0;k<y.length;k++)
{
        if(x[j]==y[k])
        {
                            for( l=0;l<j;l++)
                            {
                                    if(x[l]==x[j])
                                    sayac=-1;
                            }
                            sayac++;
        }
}
if (sayac != 0)
   document.write(x[j] + " sayısı " + sayac + " kez tekrar edildi <br>");    
sayac=0;
}
