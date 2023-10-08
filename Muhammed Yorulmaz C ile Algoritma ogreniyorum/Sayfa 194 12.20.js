let Renault1 =0;
let Mazda1 = 0;
let Honda1 = 0;
let Ford1 = 0;
let sum=0;
let sum1=0;
let sum2=0;
let sum3=0;


var Marka=new Array();
var Tutar = new Array();

for(var i=0;i<100;i++) {
Marka[i]=prompt("Marka giriniz. 1 4 arasi.");
Tutar[i] =prompt("Tutar giriniz.");

if(Marka[i] == 1) {
    Renault1++;
    sum += Number(Tutar[i]);
} else if(Marka[i] == 2) {
    Mazda1++;
    sum1 += Number(Tutar[i]);
}
else if(Marka[i] == 3) {
    Honda1++;
    sum2 += Number(Tutar[i]);
}
else if(Marka[i] == 4) {
    Ford1++;
    sum3 += Number(Tutar[i]);
}
if(Marka[i]== 111 || Tutar[i]== 111  )
break;
}

function calculate() {   
if(Math.max(Renault1,Mazda1,Honda1,Ford1) == Renault1) {
    document.write("Renault")
} else if(Math.max(Renault1,Mazda1,Honda1,Ford1) == Mazda1) {
    document.write("Mazda")
} else if(Math.max(Renault1,Mazda1,Honda1,Ford1) == Honda1) {
    document.write("Honda")
}else if(Math.max(Renault1,Mazda1,Honda1,Ford1) == Ford1) {
    document.write("Ford")
}

if(Math.max(sum,sum1,sum2,sum3) ==sum) {
    document.write("<br>" + sum)
} else if(Math.max(sum,sum1,sum2,sum3) == sum1) {
    document.write("<br>" + sum1)
} else if(Math.max(sum,sum1,sum2,sum3) == sum2) {
    document.write("<br>" + sum2)
}else if(Math.max(sum,sum1,sum2,sum3) == sum3) {
    document.write("<br>" + sum3)
}

}

calculate();