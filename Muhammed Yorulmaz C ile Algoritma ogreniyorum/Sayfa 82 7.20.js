var para_10 =  Number(prompt("lütfen 10 para miktarini giriniz."));
var para_100 = Number(prompt("lütfen 100 para miktarini giriniz."));
var kurus_10 = Number(prompt("lütfen kurus_10 para miktarini giriniz."));
var kurus_25 = Number(prompt("lütfen kurus_25 para miktarini giriniz."));

let new_para10 = (1/4) * para_10;

let new_para100 = (2.5) * para_100;

let new_kurus10 = kurus_10 * 10;

let new_kurus25 = kurus_25 * 25;

let total_balance = (new_para10 + new_para100 + new_kurus10 + new_kurus25);

let total_balance2 = (new_para10 + new_para100 + new_kurus10 + new_kurus25)%100;

let total_balance_lira = Math.floor((total_balance) / 100);

document.write( + total_balance_lira + " lira" + total_balance2 + " kuruş eder.");




