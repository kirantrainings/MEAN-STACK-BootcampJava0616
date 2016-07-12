var a = [1,2,3];
var b = [1,2,3];

var c = { x: 1, y: 2 };
var d = { x: 1, y: 2 };

var e = "text";
var f = "te" + "xt";

console.log(a == b);            // false
console.log(a === b);           // false

console.log(c == d);            // false
console.log(c === d);           // false

console.log(e == f);           // true
console.log(e === f  );