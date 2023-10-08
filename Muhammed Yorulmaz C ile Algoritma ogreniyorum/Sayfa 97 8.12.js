var gün=prompt("Haftanin gün sayisini giriniz.");
   switch(gün)
   {
      case "1":
         document.write("Pazartesi");
      break;
      case "2":
         document.write("Salı");
      break;
      case "3":
         document.write("Carsamba");
      break;
      case "4":
         document.write("Persembe");
         break;
         case "5":
            
            document.write("Cuma");
            break;
            case "6":
        
                document.write("Cumartesi");
                break;
                case "7":
                    document.write("Pazar")
                    break;
      default:
         document.write("Lütfen mevsim adı giriniz: yaz,kış,sonbahar,ilkbahar");
      break;
   }