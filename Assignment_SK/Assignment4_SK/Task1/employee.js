function controls() {
    return{
        tableId   : document.getElementById("idTable")
    };
}

function buildIndEmployee(emp){
    
    var fieldRow = controls().tableId.insertRow(rowNum);
    var i=0;
    
    fieldRow.insertCell(0).innerHTML = rowNum;
     
    for(i ; i< cols.length; i++) {
        fieldRow.insertCell(i+1).innerHTML = emp[cols[i]];
    }
    
    rowNum = rowNum+1;
}

function buildEmployees(){
    
    rowNum = 1;
    var i = 0;
    var j = 0;
    var listOfEmp = lookUpData().employee;
    
    var headerRow = controls().tableId.insertRow(0);
    
    cols = Object.getOwnPropertyNames(listOfEmp[0]);
    
    headerRow.insertCell(0).innerHTML = "S.No";
    
    for(i = 0 ; i<cols.length; i++) {
        headerRow.insertCell(i+1).innerHTML = cols[i];
    }
    
    for( j = 0; j<listOfEmp.length; j++) {
        buildIndEmployee (listOfEmp[j]);
    }
}





function initializePage(){
    
    buildEmployees();
}

initializePage();