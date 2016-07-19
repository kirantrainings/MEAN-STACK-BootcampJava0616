function controls() {
    
    return {
        firstName: document.getElementById("inpFirstName"),
        lastName: document.getElementById("inpLastName"),
        address:document.getElementById("inpAddress"),
        selection: document.getElementById("selCountry")      
        
    };  
}


function register() {
    
    var user = {};
    user.FirstName = controls().FirstName.value;
    user.LastName = controls().LasttName.value;
}


function buildBreak(name) {
    
    var breakTag = document.createElement("br");
    document.getElementsByTagName(name).appendChild(breakTag);
}


function buildDivTag(id) {
    
    var divTag = document.createElement("div");
    divTag.id = id;
    document.getElementById("register").appendChild(divTag);
}


function buildLabelTag(parentId, id, tcontent) {
    
    var labelTag = document.createElement("label");
    labelTag.id = id;
    labelTag.textContent = tcontent;
    document.getElementById(parentId).appendChild(labelTag);
   
}


function buildInputTag(parentId,id,typeAt) {
    
    var inputTag = document.createElement("input");
    inputTag.type = typeAt;
    inputTag.id = id;
    document.getElementById(parentId).appendChild(inputTag);
    
    
}


function buildSelectTag(parentId,id) {
    
    var selectTag = document.createElement("select");
    selectTag.id = id;
    document.getElementById(parentId).appendChild(selectTag); 
}


function buildOptionTag(country) {
    
    var optionTag = document.createElement("option");
    optionTag.value = country.code;
    optionTag.textContent = country.name;
    controls().selection.appendChild(optionTag);
    
}


function buildCountries() {
    
    var listcountry = lookUpData().countries;
    
    for (var i = 0; i < listcountry.length; i++) {
        
        buildOptionTag(listcountry[i]);
    }

}


function buildDivFirstName() {  
    
    buildDivTag("idfirstName");
    buildLabelTag("idfirstName","lblFirstName"," First Name:    ");
    buildInputTag("lblFirstName", "inpFirstName","text");
}

function buildDivLastName() {
    
    buildDivTag("idlastName");
    buildLabelTag("idlastName","lblLastName"," Last Name:   ");
    buildInputTag("lblLastName", "inpLastName","text");
    
}

function buildDivAddress() {
    
    buildDivTag("idAddress");
    buildLabelTag("idAddress","lblAddress","Address:    ");
    buildInputTag("lblAddress","inpAddress","text");;
}

function buildDivCountry() {
    
    buildDivTag("idCountry");
    buildLabelTag("idCountry","lblcountries"," Country: ");
    buildSelectTag("lblcountries","selCountry");
    //buildDivAddress();
    buildCountries();
    
}



function initializationPage() {
    
    buildDivFirstName();
    buildDivLastName();
    buildDivAddress();
    buildDivCountry();
    breakElements();
   
    
}

initializationPage();
