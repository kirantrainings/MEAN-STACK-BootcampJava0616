function change(){
    
    var fname = "Rohit";
    var lname = "Kavoori";
    var age = 23;
    radiobtn =  document.getElementById("male");
    
    document.getElementById("fname").value = fname;
    document.getElementById("lname").value = lname;
    document.getElementById("age").value = age;
    radiobtn.checked = true;
}