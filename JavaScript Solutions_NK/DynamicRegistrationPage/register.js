function controls() {
    return {
    dv: document.getElementById("register"),
        
    };
}
intializePage();

function intializePage() {
    
    buildForm();
}

function buildForm() {
    
    buildDiv("First Name: ", "text", "txtFirstName");
    buildDiv("Last Name: ", "text", "txtLastName");
    buildDiv("Countries: ","select","ddlCountries")
}


function buildDiv(name,val,id) {
    
    var divTag = document.createElement("div"); 
    
    divTag.appendChild(createlbl(name));
    
    if(val=="text")
        divTag.appendChild(createinputTag(val,id));
    else
        divTag.appendChild(buildCountries(id));
    
    controls().dv.appendChild(divTag);
    
}

function createlbl(name) {
    
    var labelTag = document.createElement("label");
    labelTag.textContent=name;
    
    return labelTag;
}

function createinputTag(idVal, typeVal) {
    
    var inputTag = document.createElement("input");

    inputTag.setAttribute("id",idVal);
   inputTag.setAttribute("type",typeVal);
   

    return inputTag;
}

function buildCountries(id) {
    
    var selectTag = document.createElement("select");
    
    selectTag.setAttribute("id",id);

    var countryList = lookUpData().countries;

    for(var i= 0; i < countryList.length; i++){
        
    var country = countryList[i];
    
    var optionTag = document.createElement("option");   
    
        optionTag.value = country.code;
        optionTag.textContent = country.name;
        
        selectTag.appendChild(optionTag);
    }
 return selectTag;
}

