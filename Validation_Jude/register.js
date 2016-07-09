function initPage(){
	bindEvents();
	buildCountries();
	buildStates();
}

function getControls(){
	return {
		firstName : document.getElementById("txtFirstName"),
		lastName : document.getElementById("txtLastName"),
		address : document.getElementById("txtAddress"),
		country : document.getElementById("ddlCountry"),
		state : document.getElementById("ddlState")
	};
}

function bindEvents(){
	var pageValidations = validateForm();
	
	// bind key press events
	getControls().firstName.addEventListener("keypress", pageValidations.alphabetsOnly);
	getControls().lastName.addEventListener("keypress", pageValidations.alphabetsOnly);
	getControls().address.addEventListener("keypress", pageValidations.alphaNumerics);
	
}



function buildCountries() {
	
	var list = lookUpData().countries;
	var list = lookUpData().countries;
	for(var i = 0 ; i < list.length ; i++) {
    buildOptionTagForCountry(list[i]);
        
	}
}
    
function buildOptionTagForCountry(country) {

	var countryTag = document.createElement("option");
	countryTag.value = country.code;
	countryTag.textContent = country.name;
    getControls().country.appendChild(countryTag);

}
	
function buildStates() {
	
	if(lookUpData().countries.name = "United States") {
			
		var list = lookUpUsState().usStates;
		for(var i = 0 ; i < list.length ; i++) {
    	buildOptionTagForState(list[i]);
        
		}	
			
	}

}
    
function buildOptionTagForState(state) {

	var stateTag = document.createElement("option");
	stateTag.value = state.abbreviation;
	stateTag.textContent = state.name;
    getControls().state.appendChild(stateTag);

}

initPage();