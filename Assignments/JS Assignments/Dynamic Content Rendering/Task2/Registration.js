function controls(){
    return{
       regtrationElements: document.getElementById("register") 
    };
}

function addFIrstName(){
    
    var div = document.createElement("div");
    
    var lbl = document.createElement("label");
    lbl.innerHTML = "First Name";
    div.appendChild(lbl);
    
    var firstName = document.createElement("input");
    firstName.type = "text";
    firstName.id = "txtFirstName";
    div.appendChild(firstName);
    controls().regtrationElements.appendChild(div);
    
}

function addLastName(){
    
    var div = document.createElement("div");
    
    var lbl = document.createElement("label");
    lbl.innerHTML = "Last Name";
    div.appendChild(lbl);
    
    var lastName = document.createElement("input");
    lastName.type = "text";
    lastName.id = "txtLastName";
    div.appendChild(lastName);
    controls().regtrationElements.appendChild(div);
    
}

function addCountries(){
    
    var div = document.createElement("div");
    
    var lbl = document.createElement("label");
    lbl.innerHTML = "Countries";
    div.appendChild(lbl);
    
    select = document.createElement("select");
    select.id = "ddlcountries";
    div.appendChild(select);
    buildCountries();
    controls().regtrationElements.appendChild(div);    
}

function buildCountries(){
    
    var countryList = lookUpCodes().countries;
    
    for(var i = 0; i < countryList.length; i++){
        addOption(countryList[i]);
    }
}

function addOption(country){
    
    var option = document.createElement("option");
    option.value = country.code;
    option.textContent = country.name;
    select.appendChild(option);
    
}

function addElements(){
    addFIrstName();
    addLastName();
    addCountries();
}

function initialize(){
    addElements();
}

initialize();
