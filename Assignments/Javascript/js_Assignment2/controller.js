function controls(){
    return{
        table : document.getElementById("empTable"),
    };
}

function getEmployees(){
   
    var employeeList = lookUpData().employees;
    rowNumber = 1;
    
    var firstRow = controls().table.insertRow(0);
    column = Object.getOwnPropertyNames(employeeList[0]);
    
    firstRow.insertCell(0).innerHTML = "SNO";
    
    for(var i=0;i<column.length;i++){
        firstRow.insertCell(i+1).innerHTML = column[i];
    }
    
    for(var i=0;i<employeeList.length;i++){
      perEmployee(employeeList[i]);
    }
}

function perEmployee(employee){
    
    var row = controls().table.insertRow(rowNumber);
    
    row.insertCell(0).innerHTML = rowNumber;
     
    for(var i=0;i<column.length;i++){
        row.insertCell(i+1).innerHTML = employee[column[i]];
    }
    
    rowNumber++;
}

function start(){
    getEmployees();
}

start();