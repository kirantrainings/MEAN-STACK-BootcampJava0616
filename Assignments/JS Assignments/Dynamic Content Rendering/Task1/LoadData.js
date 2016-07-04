function controls(){
    return{
       employees: document.getElementById("tblEmployee") 
    };
}

function buildEmployees(){
    var employeeList = lookUpData().employees;
    
    for(var i = 0; i < employeeList.length; i++){
        buildEmpRow(employeeList[i] , i);
    }
}

function buildEmpRow(employee , index){
    
    var empRow = document.createElement("tr");
    var rowPos = (document.getElementById("tblEmp")).rows.length;
    empRow = (document.getElementById("tblEmp")).insertRow(rowPos);
    var columns = (document.getElementById("tblEmp")).rows[0].cells.length;
//    var columns = Object.keys(employee).length;

    
    for(var i = 0; i < columns ; i++ ){
        var cell = document.createElement("td");
        
        if(i == 0){
            cell.innerHTML = index+1;
            empRow.appendChild(cell);
        }
        else if(i == 1){
            cell.innerHTML = employee["Emp Name"];
            empRow.appendChild(cell);
        }
        else if(i == 2){
            cell.innerHTML = employee.Department;
            empRow.appendChild(cell);
        }
        else if(i == 3){
            cell.innerHTML = employee.Grade;
            empRow.appendChild(cell);
            
        }
        
    }
    
}

function initialize(){
    buildEmployees();
}

initialize();