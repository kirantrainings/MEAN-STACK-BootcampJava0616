var String = "Boot Camp Java";

//console.log(String.reverse);

console.log(String.substring(0,4));


var occurence = function(){
   
    var String1 = "South America North America Asia";    
    var count = 0;
    
    for(var i = 0; i < String1.length; i++)
    {
        if(String1.charAt(i)==="A"){
            count++;
        }
    }      
    console.log("Number of occurence of A in The given String " +count);   
};

occurence();

var palindrome = function(input){    
    
    if(input == input.split('').reverse().join('')){
        console.log("Given string is Pallindrome");
    }
   
};

palindrome("liril");


var arrayIndex = function(){
     
    var arr = ["John", "james","Kiran","Krishna","Robert"];
    
    for(var j = 0; j <= arr.length ; j++){
        if(arr[j] == "Kiran"){
            console.log("Kiran found at index "+ j)
        }
    }
};

arrayIndex();