
function asalyaz(sayi1,sayi2) {   
for(sayi1; sayi1 <= sayi2; sayi1++)
{
  for (var bolum = 2; bolum < sayi1; bolum++)
    {
      if(sayi1 % bolum === 0)
          break;
    }
	if (sayi1 === bolum)
		console.log(sayi1);
      //  document.write("<br>" + sayi1);
  
}
document.write("<br>" + sayi1);
}
asalyaz(2,21);