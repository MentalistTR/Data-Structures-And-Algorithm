Math.integral=function(a,b,c,xa,xb,h)
{
 
var xp,y,s,sonuc=0,g=(xb-xa)/h;
for(var i=0; i<h; i++)

{

xp = xa + g;
y = (a * Math.pow(xp, 2)) + (b * xp) + c;
s = g * y;
sonuc += s;

}
 
return sonuc;
}
window.alert( Math.integral(1,4,2,10,50,100) );
 