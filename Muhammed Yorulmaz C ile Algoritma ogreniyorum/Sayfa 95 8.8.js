function cost() {
    if(type == 1 ) {
        let cost1 = (day * 20) + (km * 18);
        console.log("<br>" + "ödenecek total cost"  + cost1);
    }
 else if(type == 2) {
   let  cost2 = (day * 32) + (km * 22);
    console.log(cost2);
}
else if(type == 3) {
    let cost3 = (day * 43) + (km * 28);
    console.log(cost3);
}
else if(type == 4) {
   let  cost4 = (day * 51) + (km * 36);
    console.log(cost4);
} else if(type > 4 || type < 1 ) {
    console.log("yanliş type girdiniz.");
}

}

var day = prompt("day gir");
var km =  prompt("km gir");
var type =  prompt("type giriniz." + "<br>" + "type 2" );

let arabalar = ["arazi","binek","station","spor"];

document.write("<br>" + "kullandiginiz gün sayisi:" + day)
document.write("<br>" + "kullandiginiz km sayisi:" + km)
document.write("<br>" + "sectiginiz type:" + type)

cost();


