// // function functionName(parameters) {
// //   // code to be executed
// // }
// // function to add two numbers.
// function addtwo(a, b) {
//     return a + b;
// }
// re = addtwo(2, 6);
// console.log("Sum is : " + re)

// // Function Expressions
// var multiplication = function multwo(a, b) { return a * b; }
// var z = multiplication(2, 6); //Now the variable can be used as a function
// console.log("Multiplication1 is : " + z);
// //The function above is actually an anonymous function (a function without a name).
// // Functions stored in variables do not need function names.They are always invoked(called) using the variable name.

// // The Function() Constructor
// // JavaScript functions are defined with the function keyword.
// // Functions can also be defined with a built -in JavaScript function constructor called Function().
// var myfunc = new Function("a", "b", "return a*b");
// // var myfunc1 = function (a, b) { return a * b };//The example above is the same as writing
// var multipication = myfunc(4, 9);
// console.log("multiplication2 is : " + multipication);

// // Function Hoisting

// console.log(func1(5));

// function func1(y) {
//     return y * y;
// }

// // Self - Invoking Functions
// // or anonymous self - invoking function
// console.log((function (a) {
//     return a * a * a; //I will invoke myself
// })(2));


// // Functions Can Be Used as Values

// function myFunc(a, b) {
//     return a * b;
// }
// var v = myFunc(4, 3);
// console.log(v);

for(var i=0 ;i < 11 ; i++){
    console.log(i);
}