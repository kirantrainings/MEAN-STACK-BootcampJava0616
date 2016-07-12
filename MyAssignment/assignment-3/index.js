function countA(){
    var sentence = "South America, North America, Asia";
    var  count = (sentence.match(/A/g)).length;
    
    console.log(count);  
    
    
}

function reverseString(){
      var sentence = "South America, North America, Asia";
      var reverse = sentence.split(" ").reverse().join(" ");
      console.log(reverse);
}

function indexOfString(){
    var arr = ["john", "james", "kiran", "krishna", "robert"];
    var index = arr.indexOf("kiran");
    console.log("index of kiran is: " +index);
}
function checkPalindrome(){
    
}

countA();
reverseString();
indexOfString();
