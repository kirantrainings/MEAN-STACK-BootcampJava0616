/*function register() {
    //Selectors
    // id      ==>getElementById
    // tagname ==>getElementsByTagName
    // class   ==>getElementsByClassName

    var firstName = document.getElementById("txtFirstName");
    var lastName = document.getElementById("txtLastName");
    var terms = document.getElementById("chkTerms");

    if (terms.checked) {
        console.log(terms.value);
    } else {
        terms.value = "deny";
    }
    console.log(firstName.value);
    console.log(lastName.value);
}*/

function register() {
    var inpuElements = document.getElementsByTagName("input");
    console.log(inpuElements);
    var labels = document.getElementsByTagName("label");
    for (var i = 0; i < labels.length; i++) {
        labels[i].className = "lbl-control";
    }

}
