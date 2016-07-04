function controls(){
    return{
       employees: document.getElementById("employeeList") 
    };
}

function buildTable(){
    var list = lookUpData().employees;
    
    for(var i = 0; i < list.length; i++){
        buildRow(list[i] , i);
    }
}

function buildRow(employee , index){
    
    var row = document.createElement("tr");
    var rowLength = (document.getElementById("tblEmployee")).rows.length;
    row = (document.getElementById("tblEmployee")).insertRow(rowLength);
    var col = (document.getElementById("tblEmployee")).rows[0].cells.length;


    
    for(var i = 0; i < col ; i++ ){
        var td = document.createElement("td");
        
        if(i == 0){
            td.innerHTML = index+1;
            row.appendChild(td);
        }
        else if(i == 1){
            td.innerHTML = employee["Emp Name"];
            row.appendChild(td);
        }
        else if(i == 2){
            td.innerHTML = employee["Department"];
            row.appendChild(td);
        }
        else if(i == 3){
            td.innerHTML = employee["Grade"];
            row.appendChild(td);
            
        }
        
    }
    
}

function initialize(){
    buildTable();
}

initialize();