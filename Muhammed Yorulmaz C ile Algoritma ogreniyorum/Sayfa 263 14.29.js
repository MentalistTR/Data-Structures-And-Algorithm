function aynala() {
    let x = "Ali az calistigindan basit sorulara az zaman kaybetmedi."
    x = x.split(' ');
    
    let y = 'az'
    let z = 'cok'
   
    for(i=0;i<=x.length;i++) {
     if(x[i] == y) {
        x[i] = z
        
     }
   
    }
 
}

aynala();