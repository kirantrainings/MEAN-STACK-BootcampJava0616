function lookUpData(){
    return {
        Employee: [
    {
        EmployeeName: 'Bhim Dahal', 
        Department: 'java',
        Grade: 'A'
    },
    
    {
        EmployeeName: 'Sunendra', 
        Department: 'ui',
        Grade: 'A'
    },
    
    {
        EmployeeName: 'Srinivas ', 
        Department: 'bootstrap',
        Grade: 'B'
    },
    
    {
        EmployeeName: 'Jagan', 
        Department: 'database',
        Grade: 'C'
    },
    
    {
        EmployeeName: 'Lohit', 
        Department: 'Servlet',
        Grade: 'A'
    }
]
}
}


function createEmployeeTable(){
 
    var table = document.createElement("TABLE");
    table.setAttribute("id", "myTable");
   
    document.getElementById("register").appendChild(table);  
    var sizeofEmployee  = lookUpData().Employee.length;
     
    for(var i = 0; i<sizeofEmployee+1; i++)
    {
        var tr = document.createElement("TR")
        for(j = 0; j< 4; j++){
            td = document.createElement("TD");
            tr.appendChild(td);
        }
        table.appendChild(tr);
        
    }
}
    
function createTableHeading(){
    var txt1 = document.createTextNode("S.No");
    var txt2 = document.createTextNode("Employee Name");
    var txt3 = document.createTextNode("Department");
    var txt4 = document.createTextNode("Grade");
    
    var getTr = document.getElementsByTagName("tr")[0];
    var getTd = getTr.getElementsByTagName("td");
    getTd[0].appendChild(txt1);
    getTd[1].appendChild(txt2);
    getTd[2].appendChild(txt3);
    getTd[3].appendChild(txt4);
    console.log(getTd[1]);
    
    }

function populateTableSN(){
     var sizeofEmployee  = lookUpData().Employee.length;
    
    for(var i=1; i<sizeofEmployee+1; i++){
         var txt = document.createTextNode(i);
        var getTr = document.getElementsByTagName("tr")[i];
        var getTd = getTr.getElementsByTagName("td")[0];
        getTd.appendChild(txt);
    }
}

function populateTableEmployee(){
     var getTable = document.getElementById("myTable");
     var sizeofEmployee  = lookUpData().Employee.length;
     var data = lookUpData().Employee;
     for(var i=0; i<sizeofEmployee; i++){
         var txt1 = document.createTextNode(data[i].EmployeeName);
         var txt2 = document.createTextNode(data[i].Department);
         var txt3 = document.createTextNode(data[i].Grade)
         
        var getTr = document.getElementsByTagName("tr")[i+1];
        var getTd = getTr.getElementsByTagName("td");
    
         getTd[1].appendChild(txt1);
         getTd[2].appendChild(txt2);
         getTd[3].appendChild(txt3);
         
       
    }
    
    
}
function table(){
createEmployeeTable();
createTableHeading();
populateTableSN();
populateTableEmployee();
}

table();
    

