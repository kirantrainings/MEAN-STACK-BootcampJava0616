function controller(){    
  
    return {      
       mainDiv: document.getElementById("mainDiv"),
       div1:document.getElementById("div1"),
       div2:document.getElementById("div2"),
       div3:document.getElementById("div3"),
       div4:document.getElementById("div4"),
       div5:document.getElementById("div5"),
       div6:document.getElementById("div6"),
       select:document.getElementById("select")
   };     
}

//creating label tag with id
function createlblTag(labelValue ,id){  
     labelTag = document.createElement("label");
     labelTag.textContent=labelValue;
     labelTag.id = id;
     return labelTag;    
}

/*creating input tag with type and value
we can create any type of input tag with this function */
function createinputTag(inputType , value){  
    var inputTag = document.createElement("input"); 
       
        inputTag.type = inputType;
        inputTag.value=value;      
    
    return inputTag;    
}

//Creating div tag with id
function createDiv(id){
    var divTag = document.createElement("div");
    divTag.id = id;
    return divTag;
}

//creating select tag with id
function createSelectTag(id){
    var selectTag = document.createElement("select");
    selectTag.id = id;
    return selectTag;
}


//creating option tag with id
function createOptionTag(country) {
    
    var optionTag = document.createElement("option");   
    optionTag.value = country.code;
    optionTag.textContent = country.name;
    controller().select.appendChild(optionTag);
}

//assigning countries to option tag
function buildCountries() {
    var countryList = lookUpData().countries; 
    
    for(var i= 0; i < countryList.length; i++){   
        createOptionTag(countryList[i]);       
    }
}




//designing my HTML
function designMyHtml(){
     
    controller().mainDiv.appendChild(createDiv("div1"));
    controller().mainDiv.appendChild(createDiv("div2"));
    controller().mainDiv.appendChild(createDiv("div3"));
    controller().mainDiv.appendChild(createDiv("div4"));
    controller().mainDiv.appendChild(createDiv("div5"));
    controller().mainDiv.appendChild(createDiv("div6"));
    
    controller().div1.appendChild(createlblTag("First Name","lblFirstName"));
    controller().div1.appendChild(createinputTag("text",""));
    
    
    controller().div2.appendChild(createlblTag("Last Name","lblLastName"));
    controller().div2.appendChild(createinputTag("text",""));
    
    
    controller().div3.appendChild(createlblTag("Email","lblEmail"));
    controller().div3.appendChild(createinputTag("email",""));
    
    
    controller().div4.appendChild(createlblTag("Country","lblcountry"));
    controller().div4.appendChild(createSelectTag("select"));
    
    buildCountries();
       
    controller().div5.appendChild(createinputTag("checkbox",""));
    controller().div5.appendChild(createlblTag("Accept Terms & Conditions","lblTerms"));
    
    controller().div6.appendChild(createinputTag("button","Register"));
   
    
}

designMyHtml();