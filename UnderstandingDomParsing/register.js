function controls() {
    return {
        firstName: document.getElementById("txtFirstName"),
        lastName: document.getElementById("txtLastName"),
        terms: document.getElementById("chkTerms"),
        countries: document.getElementById("ddlCountry")
    };
}

function register() {
    var user = {};
    user.FirstName = controls().firstName.value;
    user.LastName = controls().lastName.value;
    user.terms = controls().terms.checked;
}


function buildCountries() {
    //Step 1. get the countries list
    var countryList = lookUpData().countries;
    //Step 2 looop through the countries
    for (var i = 0; i < countryList.length; i++) {
        //console.log(countryList[i]);
        buildOptionTag(countryList[i]);
    }
}


function buildOptionTag(country) {
    var optionTag = document.createElement("option");
    optionTag.value = country.code;
    optionTag.textContent = country.name;
    controls().countries.appendChild(optionTag);
}

function initializePage() {
    buildCountries();
}

initializePage();
