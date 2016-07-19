function control(){
     
    return{
        empTable : document.getElementById("empTbl")
    };
}


function buildEmpTbl(){
   
   var empTbl = control().empTable;
   var empList = empLookUpData().employees;
   for(var i=0;i<empList.length;i++){
       
       var row = empTbl.insertRow(i+1);
       var sNO = row.insertCell(0);
       var empName = row.insertCell(1);
       var dept = row.insertCell(2);
       var grade = row.insertCell(3);
       
       sNO.innerHTML = i+1;
       empName.innerHTML = empList[i].employeeName;
       dept.innerHTML = empList[i].department;
       grade.innerHTML = empList[i].grade;
   }
    
}

buildEmpTbl();
