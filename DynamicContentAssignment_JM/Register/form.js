function controls(){
    
    return{
        
       formElements: document.getElementById("register") 
    };
}



function lineBreak(){
	
	var brTag = document.createElement("br");
	controls().formElements.appendChild(brTag);
	
}

function createBreak(){
	
	var brTag = document.createElement("br");
	controls().formElements.appendChild(brTag);
	
}

//Creating First Name
function createFirstName() {
    
    var form = document.createElement("div");
    
    var label = document.createElement("label");
    label.innerHTML = "First Name : ";
    form.appendChild(label);

    var firstName = document.createElement("input"); 
    firstName.id = "txtFirstName";
    firstName.type = "text";
    form.appendChild(firstName);
    controls().formElements.appendChild(form);
  
    
    
}


// Creating Last Name
function createLastName() {
    
    var form = document.createElement("div");
    
    var label = document.createElement("label");
    label.innerHTML = "Last Name : ";
    form.appendChild(label);

    var lastName = document.createElement("input"); 
    lastName.type = "text";
    lastName.id = "txtLastName";
    form.appendChild(lastName);
    controls().formElements.appendChild(form);
	
	 var brTag = document.createElement("br");
	controls().formElements.appendChild(brTag);
  
    
    
}

// Select Country by Drop Downlist
function createCountry(){
    
    var form = document.createElement("div");
    
    var label = document.createElement("label");
    label.innerHTML = "Countries : ";
    form.appendChild(label);
    
    select = document.createElement("select");
    select.id = "ddlCountries";
    form.appendChild(select);
    buildCountries();
    controls().formElements.appendChild(form);
	
	 var brTag = document.createElement("br");
	controls().formElements.appendChild(brTag);
      
}

function buildCountries() {
	
	var list = lookUpData().countries;
	for(var i = 0 ; i < list.length ; i++) {
    buildOptionTag(list[i]);
        
	}
}
    
function buildOptionTag(country) {

	var optionTag = document.createElement("option");
	optionTag.value = country.code;
	optionTag.textContent = country.name;
    select.appendChild(optionTag);

}



function buildForm(){
    

    createFirstName();
	createBreak();
    createLastName();
	createBreak();
    createCountry();

	
    
}


function initializePage() {
	buildForm();

}

initializePage();