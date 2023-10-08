
var kidem = Number(prompt("lütfen kidem derecenizi giriniz"));
let maas = 5000;
let prim = 2000;

if(kidem==1) {
    prim1= prim * 3;
    total_salary = prim1 + maas;

} else if(kidem==2) {
    prim2 = prim * (1.5);
    total_salary = prim2 + maas;

} else if(kidem==3) {
    prim3 = prim;
    total_salary = prim3 + maas;
}

console.log(total_salary);


