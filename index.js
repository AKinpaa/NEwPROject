<script>
 function getCookie(byname)	
   {byname=byname+"=";
    nlen = byname.length;
    fromN = document.cookie.indexOf(byname)+0;
    if((fromN) != -1)
        {fromN +=nlen
         toN=document.cookie.indexOf(";",fromN)+0;
         if(toN == -1) {toN=document.cookie.length;}
         return unescape(document.cookie.substring(fromN,toN));
        }
    return null;
   }

 function parseCookie()   
   { var cookieList = document.cookie.split("; ");

   var cookieArray = new Array();
   for (var i = 0; i < cookieList.length; i++) {
       
       var name = cookieList[i].split("=");
       
       cookieArray[unescape(name[0])] = unescape(name[1]);
    }
   return cookieArray;
  }
 function setCookie(visits) {

    var expireDate = new Date();
    var today = new Date();
 
    expireDate.setDate(365 + expireDate.getDate());
   
    document.cookie = "visits=" + visits +
                      "; expires=" + expireDate.toGMTString() + ";";
   
    document.cookie = "LastVisit=" + escape(today.toGMTString()) +
                       "; expires=" + expireDate.toGMTString() + ";";
    }

    if ("" == document.cookie)
	{ 
	 setCookie(1);
	 document.write("<H3>Поздравляю Вас с первым посещением моего сайта.</H3>");
	}
    else {
       var cookies = parseCookie();
    
       document.write("<H4>Мы снова рады видеть Вас на моем сайте! Число лично ваших посещений - " +
          cookies.visits++ + " !</H4>");
       
       document.write("<H4>Последний раз Вы были у меня на сайте: " + cookies.LastVisit + ".</H4>");
       
       setCookie(isNaN(cookies.visits)?1:cookies.visits);
    }
</script>
