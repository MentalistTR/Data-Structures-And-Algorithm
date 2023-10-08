function aynimi(x,y) {
 
   let x_number = prompt("sayigir")
   let y_number = prompt("sayigir")
  
    
    
   if(x.slice(0,x_number) == y.slice(0,y_number)) {
       document.write("1");
   } else {
       document.write("ayni degil ")
   }
}
aynimi("baskent","baskent");