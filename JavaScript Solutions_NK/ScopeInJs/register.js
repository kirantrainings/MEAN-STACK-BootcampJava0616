function initPage() {

    bindEvents();
    populateCountries();
    
}

function getControls() {
    return {
        firstName: document.getElementById("txtFirstName"),
        lastName: document.getElementById("txtLastName"),
        address: document.getElementById("txtAddress"),
        country: document.getElementById("ddlCountry"),
        state: document.getElementById("ddlState"),
    };
}

function bindEvents() {
    var pageValidations = validators();
    //bind keypress event to first Name.
    getControls().firstName.addEventListener("keypress", pageValidations.alphabetsOnly);

    getControls().lastName.addEventListener("keypress", pageValidations.alphabetsOnly);
    
    getControls().address.addEventListener("keypress", pageValidations.alphaNumericsNspecialChars);
    
    //getControls().country.addEventListener("change", buildStateOptionTag(getControls().country))
    
}

function populateCountries() {
    
    var countryList = lookUpData().countries;
    
    for(var i = 0; i < countryList.length; i++ ) {
        
        buildOptionTag(countryList[i]);
    }
}

function buildOptionTag(country) {
    
    var optionTag = document.createElement("option");   
    optionTag.value = country.code;
    optionTag.textContent = country.name;
    getControls().country.appendChild(optionTag);
    
}

//function buildStateOptionTag(country) {
//    
//    var optionTag = document.createElement("option");
//    optionTag.value = 
//}

initPage();