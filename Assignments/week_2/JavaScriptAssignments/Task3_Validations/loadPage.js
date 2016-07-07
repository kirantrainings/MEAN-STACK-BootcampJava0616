function controls() {
    return {
        countries: document.getElementById("ddlCountry")
        , states: document.getElementById("ddlState")
    };
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
    controls().countries.appendChild(optionTag);
}

function buildStates() {
    controls().states.innerHTML = "";
    var selected = controls().countries.value;
    if (selected == "US") var stateList = lookUpStates().US;
    else if (selected == "IN") var stateList = lookUpStates().IN;
    else var stateList = lookUpStates().IN;
    for (var i = 0; i < stateList.length; i++) {
        buildStateOptionTag(stateList[i]);
    }
}

function buildStateOptionTag(state) {
    var optionTag = document.createElement("option");
    optionTag.value = state.abbreviation;
    optionTag.textContent = state.name;
    controls().states.appendChild(optionTag);
}

function loadData() {
    buildCountries();
}