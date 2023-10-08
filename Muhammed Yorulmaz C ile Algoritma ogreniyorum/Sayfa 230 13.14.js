
function asalbul(x) {   
  let i,j;
  let sayac =1;

  for(i=x+1; i<=true; i++) {
    sayac =1;
    
    for(j=2;j<x;j++) {
      if(i % j == 0) {
        sayac =0;
        break;
      
      }

    }
    if(sayac == 1) {
      document.write(i);
      console.log(i);
      break;
    }
   
   
  }

   
    }
    asalbul(15);