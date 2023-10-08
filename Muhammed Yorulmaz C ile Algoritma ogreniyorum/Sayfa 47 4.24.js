var toplam=0;
for(var i=1;i<100;i++)
	{
		if(i%3==0 ||i%5==0)
			{
				toplam+=i;
				document.write(i+"<br>");
			}
	}
document.write("Toplam :"+toplam);