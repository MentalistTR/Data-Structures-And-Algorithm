
var n,i,j,l,m;
            
n=prompt("Dizinin Eleman Sayısını Girin");
var  a=new Array(n);        
for (i=0;i<n;i++)
{
a[i] = prompt("Dizinin Elemanlarını Sırayla Girin");

}

for(i=0;i<5;i++) {
  if(a[i]!=-1) {
    for(m=i+1;m<5;m++) {
        if(a[i] == a[m]) {
            l++;
            a[m] = -1;
 
        }
        
         document.write(l,a[m]); 
         console.log(a[l,m]);
         l=1;
    
    }  

  }
    
}







