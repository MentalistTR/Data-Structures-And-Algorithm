let type = prompt("Lütfen arabanizin tipini seciniz." + "T ise 1 D ise 2 VEYA K ise 3");
let amount = prompt("ne kadarlık alacaksiniz");

var cost_T = amount * 0.1;
var cost_D = amount * 0.05;
var cost_K = amount * 0.08;

if(type == 1 && amount > 1000) {
    let total_cost1 = amount - cost_T;
    document.write("Seciminiz" + type);
    document.write("Ne kadarlik transitor alcaksiniz" + amount);
    document.write("Odeme" + total_cost1);

} else if (type == 1 && amount < 1000) {
    let total_cost1 = amount;
    document.write("Seciminiz" + type);
    document.write("Ne kadarlik transitor alcaksiniz" + amount);
    document.write("Odeme" + total_cost1);

}

else if(type == 2 && amount > 100) {
    
    let total_cost2 = amount - cost_D;

    document.write("Seciminiz" + type);
    document.write("Ne kadarlik transitor alcaksiniz" + amount);
    document.write("Odeme" + total_cost2);

} else if (type == 2 && amount < 1000) {
    
    let total_cost2 = amount;
    document.write("Seciminiz" + type);
    document.write("Ne kadarlik transitor alcaksiniz" + amount);
    document.write("Odeme" + total_cost2);

}


else if(type == 3 && amount > 500) {
    
    let total_cost3 = amount - cost_K;

    document.write("Seciminiz" + type);
    document.write("Ne kadarlik transitor alcaksiniz" + amount);
    document.write("Odeme" + total_cost3);

} else if (type == 1 && amount < 1000) {
    let total_cost3 = amount;
    document.write("Seciminiz" + type);
    document.write("Ne kadarlik transitor alcaksiniz" + amount);
    document.write("Odeme" + total_cost3);

}


