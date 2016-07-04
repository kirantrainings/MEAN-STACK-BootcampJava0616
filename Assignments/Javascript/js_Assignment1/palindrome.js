function palindrome(){
    var str = "iTopiNonAvevanoNipoti";
    var resStr = "" ;
    var msg = "";
    
    for(var i=str.length;i>=0;i--)
        resStr += str.charAt(i);
    
        if(resStr == str){
            msg = "Given string  is Palindrome";
            console.log(msg);
        }
        else{
            msg = "Given string is not Palindrome";
            console.log( msg);
        }
    
}