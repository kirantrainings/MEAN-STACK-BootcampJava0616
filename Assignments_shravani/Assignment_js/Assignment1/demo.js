// Program to find the number of A in the string
function count() {
    var count = 0;
    var string = "South America,North America,Asia"
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) == 'A') count++;
    }
    console.log("Number of occurrence of A in the given statement is: " + count);
}
// Program to reverse the given string.
function reverse() {
    var string = "Shravani Kyasaram";
    var resultString = "";
    for (var i = string.length; i >= 0; i--) resultString += string.charAt(i);
    console.log("The reverse of given string is :" + resultString);
}
// Program to check given string is palindrome or not
function palindrome() {
    var string = "CIVIC";
    var resultString = "";
    var message = "";
    for (var i = string.length; i >= 0; i--) resultString += string.charAt(i);
    if (resultString == string) {
        message = "It is Palindrome";
        console.log("The given string is " + string + " and " + message);
    }
    else {
        message = "It is not Palindrome";
        console.log("The given string is " + string + " and " + message);
    }
}
// Program to find the index of a given string in the given array
function findIndex() {
    var names = ["John", "James", "Kiran", "Krishna", "Robert"];
    for (var i = 0; i < names.length; i++)
        if (names[i] == "Kiran") console.log("Index of Krian is :" + i);
}
count();
reverse();
palindrome();
findIndex();