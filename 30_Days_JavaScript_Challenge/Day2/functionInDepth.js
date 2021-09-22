// Declared functions are not executed immediately.They are "saved for later use", and will be executed later, when they are invoked(called upon).

//     Example: 

function myFunction(a, b) {
    return a * b;
}

// A function expression can be stored in a variable:
var variable = function (a, b) { return a + b; }  //anonymous function (a function without a name).
// After a function expression has been stored in a variable, the variable can be used as a function:
// console.log(variable(12,13)); 


// Function Hoisting
// Hoisting applies to variable declarations and to function declarations.

// Because of this, JavaScript functions can be called before they are declared:
myFunction(2,4);
function myFunction(x,y) {
    return x * y;
}
// NOTE: Functions defined using an expression are not hoisted.



// Self - Invoking Functions
// A self - invoking expression is invoked(started) automatically, without being called.

// Function expressions will execute automatically if the expression is followed by().

var x=(function(){
  return "hey babe";
})();
// console.log(x);

// Add Two Number Using self Envoking function:
var sum =(function(){ 
    let a=19,b=10;
    return a+b;
})();
// console.log(sum);//29



// The arguments.length property returns the number of arguments received when the function was invoked:
var variables = function(){
return arguments.length;
}
// console.log(variables(1, 23, 4,3));//4

// The toString() method returns the function as a string:
var variables2 = function (a,b) {
    return a+b;
}
// console.log(variables2.toString());


// The Arguments Object
// JavaScript functions have a built -in object called the arguments object.
// The argument object contains an array of the arguments used when the function was called(invoked).

// create a function to sum all input values:
var sumAll=function(){
 var i,sum=0;
 for(i=0;i<arguments.length;i++){
     sum+=arguments[i];
 }
 return sum;
}
// console.log(sumAll(1, 2, 3, 4, 5,6))


// function to find(for instance) the highest value in a list of numbers:
var findMax = function () {
    var i, max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if(arguments[i]>max){max = arguments[i];
    }}
    return max;
}
// console.log(findMax(1, 2, 3, 4, 5, 6));


// The code inside a JavaScript function will execute when "something" invokes it.
// Invoking a JavaScript Function
// The code inside a function is not executed when the function is defined.
// The code inside a function is executed when the function is invoked.
// It is common to use the term "call a function" instead of "invoke a function".

// The JavaScript call() Method
// The call() method is a predefined JavaScript method.
// It can be used to invoke(call) a method with an owner object as an argument(parameter).


var person = {
    fullName:function(){
    return this.fname+" "+this.lname;
}}

var person1 = { 
    fname : "dsf",
    lname:"waer"
}
var person2={
    fname:"detfg",
    lname:"sdkj"
}
// console.log(person.fullName.call(person1));
// console.log(person.fullName.call(person2));



// The call() Method with Arguments
var person = {
    fullName: function (age,city) {
        return this.fname + " " + this.lname + " age " + age +" from "+city;
    }
}
var person1 = {
    fname: "hy",
    lname: "tnawar"
}
var person2 = {
    fname: "shivu",
    lname: "misha"
}
// console.log(person.fullName.call(person1,26,"canada"));
// console.log(person.fullName.call(person2,23,"haPur"));


// The Difference Between call() and apply()
// The difference is:
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.
// The apply() method is very handy if you want to use an array instead of an argument list.

// The apply() Method with Arguments



var person = {
    fullName: function (age, city) {
        return this.fname + " " + this.lname + " age " + age + " from " + city;
    }
}
var person1 = {
    fname: "hy",
    lname: "tnawar"
}
var person2 = {
    fname: "shivu",
    lname: "misha"
}
// console.log(person.fullName.apply(person1, [26, "canada"]));
// console.log(person.fullName.apply(person2, [23, "haPur"]));


// You can find the largest number(in a list of numbers) using the Math.max() method:
console.log(Math.max(23,54,46)); //54
// Since JavaScript arrays do not have a max() method, you can apply the Math.max() method instead.
console.log(Math.max.apply(null,[12,23,43,645])); //645
console.log(Math.max.apply("",[12,23,43,645])); //645
console.log(Math.max.apply(Math,[12,23,43,645])); //645



// JavaScript Closures
// JavaScript variables can belong to the local or global scope.
// Global variables can be made local(private) with closures.
// Global Variables
// local Variables

// a closure gives you access to an outer function’s scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.

function init() { // lexical scoping example
    var name = 'madan'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();




// Running this code has exactly the same effect as the previous example of the init() function above.What's different (and interesting) is that the displayName() inner function is returned from the outer function before being executed.
function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
        console.log(name);
    }
    return displayName;
}
var myFunc = makeFunc();
myFunc();

*

































