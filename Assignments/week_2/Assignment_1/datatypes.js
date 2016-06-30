function subString() {
    var str = document.getElementById("inputStr").value;
    var res = str.substring(1, 4);
    document.getElementById("resultStr").innerHTML = res;
}

function countChar() {
    var str = document.getElementById("countC").textContent;
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == 'A')
            count++;
    }
    document.getElementById("count").innerHTML = count;
}

function reverseStr() {
    var str = document.getElementById("strToBeReversed").value;
    var res = str.split('').reverse().join('');
    document.getElementById("reverseStr").innerHTML = res;
}

function isPalindrome() {
    var str = document.getElementById("str").value;
    var res = str.split('').reverse().join('');
    var bool = false;
    if (str == res) {
        bool = true;
    }
    document.getElementById("bool").innerHTML = bool;
}

function getIndex() {
    var arr = ["John", "james", "Kiran", "Krishna", "Robert"];
    var res = arr.indexOf("Kiran");
    document.getElementById("showIndex").innerHTML = res;
}

function slice() {
    var arr = ["John", "james", "Kiran", "Krishna", "Robert"];
    var res = arr.slice(1, 3);
    document.getElementById("slice").innerHTML = res;
}

function splice() {
    var arr = ["John", "james", "Kiran", "Krishna", "Robert"];
    arr.splice(2, 1, "Sudha", "Tom");
    document.getElementById("splice").innerHTML = arr;
}