function initPage() {

    bindCountriesEvents();
    bindEvents();
}

function getControls() {
    return {
        firstName: document.getElementById("txtFirstName"),
        lastName: document.getElementById("txtLastName"),
        address: document.getElementById("address"),
        countries: document.getElementById("ddlCountry")
    };
}

function bindEvents() {
    var pageValidations = validators();
    //bind keypress event to first Name.
    getControls().firstName.addEventListener("keypress", pageValidations.alphabetsOnly);
  //bind keypress event to last Name.
    getControls().lastName.addEventListener("keypress", pageValidations.alphabetsOnly);
    //bind keypress event to address
    getControls().address.addEventListener("keypress", pageValidations.addressTypeOnly);
      
    
}

function bindCountriesEvents() {
            window.onload = buildCountries();
    }


function buildCountries() {
    var countryList = lookUpData().countries;
    for (var i = 0; i < countryList.length; i++) {
        buildOptionTag(countryList[i]);
    }
}

function buildOptionTag(country) {
    var optionTag = document.createElement("option");
    optionTag.value = country.code;
    optionTag.textContent = country.name;
    getControls().countries.appendChild(optionTag);
}
initPage();
