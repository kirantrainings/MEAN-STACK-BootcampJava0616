function controls() {
    return {
        countries: document.getElementById("ddlCountry"),
        states: document.getElementById("ddlStates")
    };
}


function buildCountries() {
    var countryList = lookUpData().countries;
    for (var i = 0; i < countryList.length; i++) {
        buildOptionTag(countryList[i]);
    }
}

function buildStates(country) {
    if (country == "US") {
        var usList = lookUpUsStates().states;
        return {
            us: function () {
                for (var i = 0; i < usList.length; i++) {
                    buildStatesOptionTag(usList[i]);
                    console.log(usList);
                }
            }
        }
    }

}

function buildStatesOptionTag(states) {
    var optionTag = document.createElement("option");
    optionTag.value = states.abbreviation;
    optionTag.textContent = states.name;
    controls().states.appendChild(optionTag);
    console.log(optionTag);
}

/*function bindStates() {
    var control = controls().countries;
    var states = buildStates();
    control.addEventListener("click", function () {
        var options = control.querySelectorAll("option");
        var count = options.length;
        if (typeof (count) == "undefined" || count < 1) {
            buildCountries();
        }

    });
    control.addEventListener("change", function () {
        if (control.value == "United States") {
            buildStates();
        }

    });
}*/

function buildOptionTag(country) {
    var optionTag = document.createElement("option");
    optionTag.value = country.code;
    optionTag.textContent = country.name;
    controls().countries.appendChild(optionTag);
}

function bindEvents() {
    var countryDdl = controls().countries;
    countryDdl.addEventListener("change", function () {
        buildStates(this.value).us();
    });
}

function initializePage() {
    buildCountries();
    //bindStates();
    bindEvents();

}

initializePage();
