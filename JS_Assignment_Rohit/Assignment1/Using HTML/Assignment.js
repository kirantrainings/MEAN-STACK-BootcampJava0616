// Program to identify the number of occurcences of "A" in the following statement.
function count(){
    var count = 0;
    var string = String(document.getElementById("input1").value);
    var character = String(document.getElementById("charInput").value);
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) == character)
        count++;
    }
    document.getElementById("result1").innerHTML = count;
}

// Program to reverse the given string.
function reverse(){
    var string = String(document.getElementById("input2").value);
    var resultString = "";

    for(var i=string.length;i>=0;i--)
        resultString += string.charAt(i);

    document.getElementById("result2").innerHTML = resultString;
}

// Program to check given string is palindrome or not
function palindrome(){
    var string = String(document.getElementById("input3").value);
    var resultString = "" ;
    var message = "";
    
    for(var i=string.length;i>=0;i--)
        resultString += string.charAt(i);
    
        if(resultString == string){
            message = "It is Palindrome";
            document.getElementById("result3").innerHTML = message;
        }
        else{
            message = "It is not Palindrome";
            document.getElementById("result3").innerHTML = message;
        }
    
}

// Program to find the index of a given string in given array
 function findIndex(){   
    var names = String(document.getElementById("input4").value);
    if(names.includes(','))
        var array = names.split(",");
    else
        var array = names.split(" ");
    var string = String(document.getElementById("strInput").value);
    for(var i=0;i<array.length;i++)
        if(array[i]==string)
           document.getElementById("result4").innerHTML = i;
 }
