// you can create a function by passing the
// Function constructor a string of code
var func_multiply = new Function("arg1", "arg2", "return arg1 * arg2;");
func_multiply(5,10); // =&gt; 50
// define our function with the callback argument
function performArithematicOperation(arg1, arg2, callback) {
    // this generates a random number between
    // arg1 and arg2
    var my_number = Math.ceil(Math.random() *
        (arg1 - arg2) + arg2);
    // then we're done, so we'll call the callback and
    // pass our result
    callback(my_number);
}
// call the function
performArithematicOperation(5, 15, function(num) {
    // this anonymous function will run when the
    // callback is called
    console.log("callback called! " + num);
});

