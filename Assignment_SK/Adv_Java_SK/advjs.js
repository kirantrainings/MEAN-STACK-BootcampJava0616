1.	What are the ways to create the objects
Define and create a single object, using an object literal.

var car = {company:"Maruthi", model:"800"};

Define and create a single object, with the keyword new.

var car = new Object();

Define an object constructor, and then create objects of the constructed type.

function car(company, model) {
    this.company = first;
    this.model = last;
}

2.	How many ways we can create the arrays.

Using an array literal is the easiest way to create a JavaScript Array.

var j2ee = ["servlets", "jsp", "jsf"];

Using the JavaScript Keyword new

var j2ee = new Array("servlets", "jsp", "jsf");

3.	What are arguments in javascript functions.
Function arguments are the real values passed to (and received by) the function.

function sum(3,5) {
    
    return 3 + 5;
}

4.	What is prototypal inheritance in javascript

In JavaScript, a prototype is a property of functions and of objects that are created by constructor functions. The prototype of a function is an object. Its main use is when a function is used as a constructor. The prototype object can be used to derive one object from another. For example, you can use the Object.create function to derive a new object using the prototype of the some other object.

function Vehicle(company, type) {
    this.company = company;
    this.type = type;
    
}

var bike = new Vehicle("Maruthi", "car");
var car = new Vehicle("Yamah", "bike");

5.	What are enumerators in javascript.

The enumerator object is useful if you want to iterate through a large collection. Iterating through a large collection with the enumerator object is faster than any other way in javascript. It allows using a walk- through mechanism to iterate through the items. There is a pointer, which designates he currently selected element and can be used to navigate within the enumerator object. In a newly created enumerator object., the currently selected item is the first item of the collection.

var Clothes = {
  SHIRT: 1,
  PANT: 2,
  TSHIRT: 3,
  FLIPONS:4,
  properties: {
    1: {name: "shirt", value: 1, code: "Sh"},
    2: {name: "pant", value: 2, code: "P"},
    3: {name: "tshirt", value: 3, code: "TS"},
    4: {name: "flipons", value: 3, code: "FP"}
      
  }
};

6.	Callbacks and closures.
A callback function, also known as a higher-order function, is a function that is passed to another function (let’s call this other function “otherFunction”) as a parameter, and the callback function is called (or executed) inside the otherFunction. A callback function is essentially a pattern (an established solution to a common problem), and therefore, the use of a callback function is also known as a callback pattern.

function mathOperation(arg1, arg2, callback) {
    var my_number = Math.ceil(Math.random() *
        (arg1 - arg2) + arg2);
    callback(my_number);
}
mathOperation(4, function(num) {
    console.log("callback called! " + num);
});

A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.
The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. Note that the inner function cannot call the outer function’s argumentsobject, however, even though it can call the outer function’s parameters directly.You create a closure by adding a function inside another function.

function myFunction() {
    var a = 4;
    document.getElementById("demo").innerHTML = a * a;
}

7.Module based programming in javascript.

Modules divide programs into clusters of code that, by some criterion, belong together. This chapter explores some of the benefits that such division provides and shows techniques for building modules in JavaScript. The benefits of organizing a program into several files or modules are similar. Structure helps people who aren’t yet familiar with the code find what they are looking for and makes it easier for the programmer to keep things that are related close together.

var MyModule = (function() {
  var myPrivateData = 303;
  function myPrivateFunction() {
    alert('private');
  }
  this.myPublicData = 42;
  this.myPublicFunction = function() {
    alert(this.myPublicData);
  }
  return this;
})();

8.What is strict mode in javascript 
The "use strict" directive is new in JavaScript 1.8.5 (ECMAScript version 5).It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.The purpose of "use strict" is to indicate that the code should be executed in "strict mode".With strict mode, you can not, for example, use undeclared variable.

"use strict";
myFunction();

function myFunction() {
    y = 3.14;   // This will cause an error (y is not defined)
}

9.what is the difference between == and ===

== is just comparing the two values, and if they are of different types, type conversion is done

=== compares the values and well as their types - so no type conversion will be done here.
var a = [1,2,3];
var b = [1,2,3];
console.log(a == b);
console.log(a === b);

10.Ternary operator.

The conditional (ternary) operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement.

Syntax

Condition ? expr1 : expr2

Parameters
condition
An expression that evaluates to true or false.
expr1, expr2
Expressions with values of any type.

Ex:
access = firstCheck ? "Access denied" : secondCheck ? "Access

11.Difference between public, private and static variables and their use cases.

A variable declared outside a function, becomes GLOBAL.
A global variable has global scope: All scripts and functions on a web page can access it.
Private members are made by the constructor. Ordinary vars and parameters of the constructor becomes the private members.
A function is an object. That provides us with a nifty way to create static variables or, in other words, the variables which persist along multiple calls. There are languages which allow to put a static keyword before a variable, and then such variable is not cleared in next calls.
