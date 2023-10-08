
function calculate() { 
   let new_x = 0;
 x = prompt("lütfen 2 tabanındaki sayiyi girin")
 x = x.split('');
 

 x[0] = (Number(x[0]) * Math.pow(2,5))
 x[1] = (Number(x[1]) * Math.pow(2,4))
 x[2] = (Number(x[2]) * Math.pow(2,3))
 x[3] = (Number(x[3]) * Math.pow(2,2))
 x[4] = (Number(x[4]) * Math.pow(2,1))
 x[5] = (Number(x[5]) * Math.pow(2,0))

 new_x = Number(x[0]) + Number(x[1]) +Number(x[2]) +Number(x[3]) +Number(x[4]) + Number(x[5]) 

 console.log(new_x);
}


calculate();