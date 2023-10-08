
let vize1 = Number(prompt("lütfen vizenizi giriniz"));
let final = Number(prompt("lütfen final notunuzu giriniz"));

let average = Number((vize1 * 0.4) + (final * 0.6));

if(average < 50) {
    console.log("F");
} else if(average >=50 && average  < 60 ) {
    console.log("D");
}
else if(average>=60 && average  < 70) {
    console.log("C");
}
else if((average>=70) && average < 80) {
    console.log("B");
}
else if(average>=80 && average < 90) {
    console.log("A");
}
else{
    console.log("A+");
}