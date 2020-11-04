
var risposta1 = 4;
var domanda1= document.domanda1;

      function validazione() {
		  
         if( domanda1 != risposta1 ) {
            alert( "La risposta alla domanda 1 non è corretta!");
            return false;
		 }
         else{
			 document.risposta_domanda_1.html("Hello <b>world!</b>");
		 }
         return( true );
		 
      }
	  alert(domanda1)
