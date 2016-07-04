function controls() {
    return {
        empTable: document.getElementById("tblEmployee")
    };
}

function getEmployees() {
    var empDataList = lookUpData().employees;
    rowNumber = 1;
    var firstRow = controls().empTable.insertRow(0);
    fields = Object.getOwnPropertyNames(empDataList[0]);
    var th = document.createElement("th"); // TABLE HEADER.
    th.innerHTML = "S. No";
    firstRow.appendChild(th);
    for (var i = 0; i < fields.length; i++) {
        var th = document.createElement("th"); // TABLE HEADER.
        th.innerHTML = fields[i];
        firstRow.appendChild(th);
    }
    for (var i = 0; i < empDataList.length; i++) {
        eachEmployee(empDataList[i]);
    }
}

function eachEmployee(employee) {
    var row = controls().empTable.insertRow(rowNumber);
    row.insertCell(0).innerHTML = rowNumber;
    for (var i = 0; i < fields.length; i++) {
        row.insertCell(i + 1).innerHTML = employee[fields[i]];
    }
    rowNumber++;
}

function initializePage() {
    getEmployees();
}