// Program to identify the number of occurcences of "A" in the following statement.
function count(){
    var count = 0;
    var string = "South America,North America,Asia"
    
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) == 'A')
        count++;
    }
   console.log("Number of A in the given statement: " + count);
}

// Program to reverse the given string.
function reverse(){
    var string = "Rohit Kavoori";
    var resultString = "";

    for(var i=string.length;i>=0;i--)
        resultString += string.charAt(i);

   console.log("The given string is "+string+" and its reverse is :" + resultString);
}

// Program to check given string is palindrome or not
function palindrome(){
    var string = "NITIN";
    var resultString = "" ;
    var message = "";
    
    for(var i=string.length;i>=0;i--)
        resultString += string.charAt(i);
    
        if(resultString == string){
            message = "It is Palindrome";
            console.log("The given string is "+string+" and " + message);
        }
        else{
            message = "It is not Palindrome";
            console.log("The given string is "+string+" and " + message);
        }
    
}

// Program to find the index of a given string in given array
 function findIndex(){   
    var names = ["John","James","Kiran","Krishna","Robert"];
    
    for(var i=0;i<names.length;i++)
        if(names[i]=="Kiran")
            console.log("Index of Krian is :" + i);
 }

count();
reverse();
palindrome();
findIndex();