function control() {
    
    return {
        
        head: document.getElementById("tbl")
    };
}

intializePage();

function intializePage() {
    
    buildTable();
}

// Gets the data from data.js file and builds the option tag
function buildTable() {
    
    var employeeList = lookUpEmployee().employees;
    
    //var count = Object.keys(employeeList).length;

    for(var i = 0; i < employeeList.length; i++){
        
        buildRowTag(employeeList[i], i);
    }
}

//Builds the optuin tag using innnerHTML and setting the cell values
function buildRowTag(employee , i) {
    
    var row = control().head.insertRow();

    row.insertCell(0).innerHTML = i+1;
    row.insertCell(1).innerHTML = employee.employeename;
    row.insertCell(2).innerHTML = employee.department;
    row.insertCell(3).innerHTML = employee.grade;
   
}

