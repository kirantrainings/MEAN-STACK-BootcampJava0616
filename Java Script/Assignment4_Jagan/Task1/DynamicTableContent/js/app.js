function controller(){
    return {
        table : document.getElementById("myTable")
    };
    
}





function displayTableData(){
    
    var empList = lookUpData().employees;
    
    count = 1;//for generating serial numbers
    
    //inserting into table
    var columnName = controller().table.insertRow(0);
    
    //accessing properties of first object for coloumn names for table
    tableColumnNames = Object.getOwnPropertyNames(empList[0]);
    
    //setting first colomn name
    columnName.insertCell(0).innerHTML = "S.No";
    
    //setting remaining colomn names
    for(var i=0;i<tableColumnNames.length;i++){
        columnName.insertCell(i+1).innerHTML = tableColumnNames[i];
    }
    
    //inserdting data from json object to table
    for(var i = 0; i < empList.length ; i++){
      employeeData(empList[i]);
    }
}

function employeeData(employee){
    
    var row = controller().table.insertRow(count);
    
    //inserting S.No 
    row.insertCell(0).innerHTML = count;
    
    //inserting each row data
    for(var i=0;i<tableColumnNames.length;i++){
        row.insertCell(i+1).innerHTML = employee[tableColumnNames[i]];
    }
    
    count = count+1;
}

displayTableData();