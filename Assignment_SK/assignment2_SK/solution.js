// 1

var counter = 0;

var str = "South America, North America, Asia";

for (var i = 0 ; i < str.length ; i++){
    
    if (str.charAt(i) == 'A'){
        counter ++;
    }
}
console.log("Total number of A's in given string " + counter);


//2
var str1 = "Hi How R U?";
var rev = '';

for(var i = str1.length; i>=0 ; i--){
    rev += str1.charAt(i);
}

console.log("Original string is " + str1);
console.log("Reversed string is " + rev);

//3
var checkstr = "LIRIL";
var revcheckstr = '';

for(var i = str1.length; i>=0 ; i--){
    revcheckstr += checkstr.charAt(i);
}

if(checkstr == revcheckstr){
    console.log(checkstr + " is palindrome");
}
else {
    console.log(checkstr+ " not a palindrome");
}


//4
var names = ["John","james","Kiran","Krishna","Robert"];

for (var i =0; i< names.length ; i++){
    if(names[i] == "Kiran"){
        console.log("index of Kiran in array is " + i);
    }
}