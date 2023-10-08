let sum=3;
let sum1=3;
function calculate(day) {
    document.write("1inci gün" +"3")
    for(i=2; i<=day;i++) {
      
      sum = sum * 2;
     
      document.write("<br>" + i + "inci gun." + sum);

    }

}
calculate(30)