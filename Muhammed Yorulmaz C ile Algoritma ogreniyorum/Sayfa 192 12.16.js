var a = [53,47,45,10,8,7,3,0,0];
a.push(prompt("eklencek sayiyi giriniz."));
a.sort(function(a,b){return a-b});
document.write(a);