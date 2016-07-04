
function count(){
    var count = 0;
    var str = "South America,North America,Asia"
    
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'A')
        count++;
    }
   console.log("Number of occurences of A in a given string is " + count);
}
