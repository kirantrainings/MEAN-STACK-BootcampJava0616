function createElements(){
    var ctrl = controls();
    
    var div1 = document.createElement("DIV");
    var label1 = document.createElement("LABEL");
    var input1 = document.createElement("INPUT");
    input1.setAttribute("type", "text");
    input1.setAttribute("id", "txtFirstName");
    var label1txt = document.createTextNode("First Name: ");
    
    label1.appendChild(label1txt);
    div1.appendChild(label1)
    div1.appendChild(input1);
    ctrl.divContainer.appendChild(div1);
    
    var div2 = document.createElement("DIV");
    var label2 = document.createElement("LABEL");
    var input2 = document.createElement("INPUT");
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "txtLastName");
    var label2txt = document.createTextNode("Last Name: ");
    
    label2.appendChild(label2txt);
    div2.appendChild(label2)
    div2.appendChild(input2);
    ctrl.divContainer.appendChild(div2);
    
    var div3 = document.createElement("DIV");
    var label3 = document.createElement("LABEL");
    var select = document.createElement("SELECT");
    select.setAttribute("id", "ddlCountries");
    var label3txt = document.createTextNode("Countries: ");
    
    label3.appendChild(label3txt);
    div3.appendChild(label3)
    div3.appendChild(select);
    ctrl.divContainer.appendChild(div3);
}

function controls(){
    return {
        divContainer: document.getElementById("register"),
        firstName: document.getElementById("txtFirstName"),
        lastName: document.getElementById("txtLasttName"),
        countries: document.getElementById("ddlCountries")
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

function initiPage(){
    createElements();
    buildCountries();
}
initiPage();