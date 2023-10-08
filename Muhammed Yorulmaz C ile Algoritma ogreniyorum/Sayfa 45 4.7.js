
let a = Number(prompt("lüfen x2 başkatsayısını giriniz"));
let b = Number(prompt("lüfen x başkatsayısını giriniz"));
let c = Number(prompt("lüfen c sayisini giriniz"));


var reel_kök = Number(Math.sqrt((b*b) - (4*(a)*(c))));

if(reel_kök > 0 ) {
    alert("2 tane reel kökünüz vardir");
} else {
    alert("kökünüz yoktur");
}

