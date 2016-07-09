function validateForm(){
		
	return{ 
		
		numbersOnly : function(event){
			
					
				if (event.keyCode != 46 && event.keyCode > 31 && (event.keyCode < 48 || event.keyCode > 57)) {
					
					return true;
					
				} else 
					
					event.preventDefault();
						
				
				
		},
	
	
		
		alphabetsOnly : function(event){
			console.log(event);
			console.log(this);
		

            if ((event.keyCode > 64 && event.keyCode < 91) || (event.keyCode > 96 && event.keyCode < 123)){
				
				return true;
				
			} else 
				
				event.preventDefault();
		},
		
		
		alphaNumerics: function () {

        }
			
	
	};
	
}