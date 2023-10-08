let x = "bilgisayar arasinav";
let y = "102 dersi";
let z = "bilgisayar arasinav";
let x_split = prompt("no giriniz.")
let y_split = prompt("no giriniz.")

x = x.slice(0,x_split-1);
y = y.slice(0,y_split);
z = z.slice(Number(x_split)+2,z.length);

//  document.write("<br>" + x);
//  document.write("<br>" +y);
//  document.write("<br>" +z);

 document.write( x + y + z);