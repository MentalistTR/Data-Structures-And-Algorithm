function sirala () {
x.sort(function(a,b){return a-b});

}

var x=new Array();

for(var i=1;i<50;i++) {
x[i]=Math.floor(Math.random('')*1000 );

}
document.write("<br>" + x);
console.log(x);
sirala();
document.write("<br>" + x);
console.log(x);