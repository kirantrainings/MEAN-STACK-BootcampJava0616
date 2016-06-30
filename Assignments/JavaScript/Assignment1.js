//To find the occuranxces of 'A'
findA =function(){
    
    var count =0;

    var s = "South America, North America, Asia";
    
    for(var i = 0; i< s.length;i++){
        if (s.charAt(i) == 'A'){
            count++;
        }
    }
    console.log ("The number of occurances of A are " +count);
}

findA();


//To find if a given string is palindrome or not
   var string = "malayalam";
    var resultString = "";
    
    for(var i=string.length;i>=0;i--)
        resultString += string.charAt(i);
    
    if(resultString == string)
        console.log("Given string is "+string+" and it is Palindrome");
    else
        console.log("Given string is "+string+" and it is not Palindrome");


//To find the index of a specified string
var names = ["John","James","Kiran","Krishna","Robert"];
    
    for(var i=0;i<names.length;i++)
        if(names[i]=="Kiran")
            console.log("Index of Krian is :" + i);

//To reverse a given string
var string = "This string is present here to get reversed";
    var resultString = "";

    for(var i=string.length;i>=0;i--)
        resultString += string.charAt(i);

    console.log("The given string is ....This string is present here to get reversed.... and its reverse is :" + resultString);
