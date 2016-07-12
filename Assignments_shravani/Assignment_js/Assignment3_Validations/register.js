function checkValidations() {
    var validations = validators();
    validations.alphabetsOnly();
    validations.numbersOnly();
    validations.alphaNumerics();
}

function initPage() {
    bindEvents();
    buildCountries();
}

function getControls() {
    return {
        firstName: document.getElementById("txtFirstName")
        , lastName: document.getElementById("txtLastName")
        , age: document.getElementById("txtAge")
        , address: document.getElementById("txtAddress")
        , countries: document.getElementById("ddlCountry")
        , states: document.getElementById("ddlState")
    };
}

function bindEvents() {
    var pageValidators = validators();
    getControls().firstName.addEventListener("keypress", pageValidators.alphabetsOnly);
    getControls().lastName.addEventListener("keypress", pageValidators.alphabetsOnly);
    getControls().age.addEventListener("keypress", pageValidators.numbersOnly);
    getControls().address.addEventListener("keypress", pageValidators.alphaNumerics);
    getControls().countries.addEventListener("change", pageValidators.changeDropDown);
}

function buildCountries() {
    var countryList = lookUpCountries().countries;
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

function buildStates() {
    if (getControls().countries.value == "US") var stateList = lookUpStates().usStates;
    else if (getControls().countries.value == "IN") var stateList = lookUpStates().indianStates;
    for (var i = 0; i < stateList.length; i++) {
        buildStateOptionTag(stateList[i]);
    }
}

function buildStateOptionTag(state) {
    var stateOptionTag = document.createElement("option");
    stateOptionTag.value = state.abbreviation;
    stateOptionTag.textContent = state.name;
    getControls().states.appendChild(stateOptionTag);
}
initPage();