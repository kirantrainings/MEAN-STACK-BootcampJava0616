function controls() {
    return {
        registerDiv: document.getElementById("register")
    };
}

function getDivTag(id) {
    var divTag = controls().registerDiv.appendChild(document.createElement("div"));
    divTag.id = id;
}

function getlblTag(divId, id, lblcontent) {
    var lblTag = document.createElement('label');
    lblTag.id = id;
    lblTag.textContent = lblcontent;
    document.getElementById(divId).appendChild(lblTag);
}

function getInputTag(divId, id, type) {
    var inputTag = document.createElement("input");
    inputTag.id = id;
    inputTag.type = type;
    document.getElementById(divId).appendChild(inputTag);
}

function lineBreak(id) {
    var bTag = document.createElement("br");
    document.getElementById(id).appendChild(bTag);
}

function buildSelectTag(divId, id) {
    var selectTag = document.createElement("select");
    selectTag.id = id;
    document.getElementById(divId).appendChild(selectTag);
}

function buildCountries() {
    var countryList = lookUpData().countries;
    for (var i = 0; i < countryList.length; i++) {
        buildOptionTag("ddlCountry", countryList[i]);
    }
}

function buildOptionTag(id, country) {
    var optionTag = document.createElement("option");
    optionTag.value = country.code;
    optionTag.textContent = country.name;
    document.getElementById(id).appendChild(optionTag);
}

function getButton() {
    var inputDiv = controls().registerDiv.appendChild(document.createElement("div"));
    inputDiv.id = "inputDiv";
    var input = inputDiv.appendChild(document.createElement("input"));
    input.id = "regBtn";
    input.type = "button";
    input.value = "Register";
}

function buildTags() {
    getDivTag("fname");
    getlblTag("fname", "lblfname", "First name:");
    getInputTag("fname", "txtfname", "text");
    lineBreak("fname");
    getDivTag("lname");
    getlblTag("lname", "lbllname", "Last Name:");
    getInputTag("lname", "txtlname", "text");
    lineBreak("lname");
    getDivTag("countriesList");
    getlblTag("countriesList", "lblCountry", "Countries:");
    buildSelectTag("countriesList", "ddlCountry");
    buildCountries();
    getButton();
}