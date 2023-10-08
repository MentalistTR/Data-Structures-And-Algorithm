var month=prompt("Lütfen Mevsim sayisini giriniz.");
var Person_Number = prompt("kişi saiyisini girinz.")
var cost = 0;
   switch(month)
   {
      case "1":
        cost = Person_Number * 15000;
        document.write(cost);
      break;
      case "2":
        cost = Person_Number * 5000;
        document.write(cost);
      break;
      case "3":
        cost = Person_Number * 5000;
        document.write(cost);
      break;
      case "4":
        cost = Person_Number * 25000;
        document.write(cost);
         break;
   }
