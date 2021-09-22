function Show(){
    document.getElementById("1stline").style.display = "block";
}

function Hide() {
    document.getElementById("1stline").style.display = "none";
}



function printPage() {
    window.print();
}



// This is javaScript single comment
/* This is multiline 
 commments */




// const keyword to define a variable that cannot be reassigned, and the let keyword to define a variable with restricted scope.

// After the declaration, the variable has no value(technically it has the value of undefined).
var number;
// number is undefined coz this is declare

var person = "John Doe", carName = "Volvo", price = 200; //one statement many variable.

var Name = "Dheeraj"+" "+"Tiwari";

var str = "This is string";
var num=1023;
var ThisIsAlsoNumber = 23.123;


// Remember that JavaScript identifiers(names) must begin with:

// A letter(A - Z or a - z)
// A dollar sign($)
// Or an underscore(_)

// In jQuery $("p"); means "select all p elements"



// These two keywords provide Block Scope variables(and constants) in JavaScript.

// Before ES2015, JavaScript had only two types of scope: Global Scope and Function Scope.




// Hoisting : You can use the variable before it is declared:

// JavaScript Const:
// Variables defined with const behave like let variables, except they cannot be reassigned:

// JavaScript Operators : 
// +
// -
// *
// /  (Dividing)
// //
// **
// %(Remainder)


// JavaScript Type Operators
// typeof
// instanceof

var x = 16 + 4 + "Volvo"; //20Volvo
var x = "Volvo" + 16 + 4; //Volvo164
var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String

// JavaScript Arrays
var cars = ["Saab", "Volvo", "BMW"];

// JavaScript Objects[JavaScript objects are written with curly braces {}.]
var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };


// The typeof Operator
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"
typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"
// In JavaScript, a variable without a value, has the value undefined.The type is also undefined.


// Empty Values
// An empty value has nothing to do with undefined.
// Null
// In JavaScript null is "nothing".It is supposed to be something that doesn't exist.

// Unfortunately, in JavaScript, the data type of null is an object.
typeof null // object.

var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = null;    // Now value is null, but type is still an object

var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person = undefined;   // Now both value and type is undefined.


// undefined and null are equal in value but different in type:
typeof undefined           // undefined
typeof null                // object

null === undefined         // false
null == undefined          // true

// Primitive Data
// The typeof operator can return one of these primitive types:

// string
// number
// boolean
// undefined
typeof "John"              // Returns "string"
typeof 3.14                // Returns "number"
typeof true                // Returns"boolean"
typeof false               // Returns"boolean"
typeof x                   // Returns "undefined" (if x has no value)

// Complex Data
// The typeof operator can return one of two complex types:
// function
//  object

typeof { name: 'John', age: 34 } // Returns "object"
typeof [1, 2, 3, 4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc() { }   // Returns "function"

// Note: The typeof operator returns "object" for arrays because in JavaScript arrays are objects.



// JavaScript Functions
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it(calls it).
function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
}


// functon Syntax
function name(parameter1, parameter2, parameter3) {
    // code to be executed
}

// Function parameters are listed inside the parentheses() in the function definition.

// Function arguments are the values received by the function when it is invoked.



// Function Invocation
// The code inside the function will execute when "something" invokes(calls) the function:

//     When an event occurs(when a user clicks a button)
// When it is invoked(called) from JavaScript code
// Automatically(self invoked)

// Why Functions ?
    // You can reuse code: Define the code once, and use it many times.

// Convert Fahrenheit to Celsius:
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}






// Local Variables
// code here can NOT use carName

function myFunction() {
    var carName = "Volvo";
    // code here CAN use carName
}
// code here can NOT use carName


// JavaScript Objects
// Objects are variables too.But objects can contain many values.

// The values are written as name: value pairs(name and value separated by a colon).

// JavaScript objects are containers for named values called properties or methods.



// Object Properties
// The name: values pairs in JavaScript objects are called properties:

// Accessing Object Properties:
// objectName.propertyName
    //    or
// objectName["propertyName"]

// Object Methods
// Objects can also have methods.
// Methods are actions that can be performed on objects.
// Methods are stored in properties as function definitions.
var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () { // this is called method  of a function
        return this.firstName + " " + this.lastName;
    }
};
// The this Keyword
// In a function definition, this refers to the "owner" of the function.

// In the example above, this is the person object that "owns" the fullName function.

// In other words, this.firstName means the firstName property of this object.



// Accessing Object Methods
// You access an object method with thefollowing syntax:

// objectName.methodName()
// Example
// name = person.fullName();


/* NOTE : If you access a method without the() parentheses, it will return the function definition:
*/

// When using the === operator, equal values may not be equal, because the === operator expects equality in both data type and value.


// JavaScript String Methods
// String Length
var txt = "Dheeraj";
var sln = txt.length; //7


// Finding a String in a String
// The indexOf() method returns the index of(the position of) the first occurrence of a specified text in a string:
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
// NOTE:Both indexOf(), and lastIndexOf() return -1 if the text is not found.


// Extracting String Parts
// There are 3 methods for extracting a part of a string:

slice(start, end) // end excluded
substring(start, end)
substr(start, length)

// If you omit the second parameter, the method will slice out the rest of the string:

// Example
var res = str.slice(7);


// Replacing String Content
// The replace() method replaces a specified value with another value in a string:

// Example
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

// By default, the replace() method replaces only the first match:

// Example
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");

// By default, the replace() method is case sensitive.Writing MICROSOFT(with upper -case) will not work:

// Example
str = "Please visit Microsoft!";
var n = str.replace("MICROSOFT", "W3Schools");

// To replace case insensitive, use a regular expression with an / i flag(insensitive):

// Example
str = "Please visit Microsoft!";
var n = str.replace(/MICROSOFT/i, "W3Schools");


// To replace all matches, use a regular expression with a / g flag(global match):

// Example
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");


// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():

// Example
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper

var text1 = "Hello World!";       // String
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower


// The concat() Method
// concat() joins two or more strings:

// Example
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);


// String.trim()
// The trim() method removes whitespace from both sides of a string:

// Example
var str = "       Hello World!        ";
alert(str.trim());


// JavaScript String Padding
// ECMAScript 2017 added two String methods: padStart and padEnd to support padding at the beginning and at the end of a string.

//     Example
let str = "5";
str = str.padStart(4, 0);
// result is 0005

let str = "5";
str = str.padEnd(4, 0);
// result is 5000


// Extracting String Characters
// There are 3 methods for extracting string characters:

//     charAt(position)
// charCodeAt(position)
// Property access[]

// The charAt() Method
// The charAt() method returns the character at a specified index(position) in a string:

// Example
// var str = "HELLO WORLD";
// str.charAt(0);            // returns H



// The charCodeAt() Method
// The charCodeAt() method returns the unicode of the character at a specified index in a string:

// The method returns a UTF - 16 code(an integer between 0 and 65535).

//     Example
// var str = "HELLO WORLD";

// str.charCodeAt(0);         // returns 72

// Property Access
// ECMAScript 5(2009) allows property access[] on strings:

// Example
// var str = "HELLO WORLD";
// str[0];                   // returns H


// Converting a String to an Array
// A string can be converted to an array with the split() method:

// Example
var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe




var x = 999999999999999;   // x will be 999999999999999
var y = 9999999999999999;  // y will be 10000000000000000


// NaN - Not a Number
// NaN is a JavaScript reserved word indicating that a number is not a legal number.

// Trying to do arithmetic with a non - numeric string will result in NaN(Not a Number):

// Example
var x = 100 / "Apple";  // x will be NaN (Not a Number)


// You can use the global JavaScript function isNaN() to find out if a value is a number:

// Example
var x = 100 / "Apple";
isNaN(x);               // returns true because x is Not a Number


var x = NaN;
var y = 5;
var z = x + y;         // z will be NaN


var x = NaN;
var y = "5";
var z = x + y;         // z will be NaN5


// NaN is a number: typeof NaN returns number:
// Example
typeof NaN;            // returns "number"


// Infinity(or - Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

//     Example
var myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
    myNumber = myNumber * myNumber;
}


// Division by 0(zero) also generates Infinity:
// Example
var x = 2 / 0;       // x will be Infinity
var y = -2 / 0;       // y will be -Infinity


// Infinity is a number: typeof Infinity returns number.
// Example
typeof Infinity;     // returns "number"

// Hexadecimal
// JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
//  Example
var x = 0xFF;        // x will be 255


// By default, JavaScript displays numbers as base 10 decimals.

// But you can use the toString() method to output numbers from base 2 to base 36.

// Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
// Example
var myNumber = 32;
myNumber.toString(10);  // returns 32
myNumber.toString(32);  // returns 10
myNumber.toString(16);  // returns 20
myNumber.toString(8);   // returns 40
myNumber.toString(2);   // returns 100000



// Or even worse.Objects cannot be compared:
Example
var x = new Number(500);
var y = new Number(500);

// (x == y) is false because objects cannot be compared.


// Note the difference between(x == y) and(x === y).
// Comparing two JavaScript objects will always return false.




// JavaScript Number Methods
// The toString() Method
// The toString() method returns a number as a string.

// All number methods can be used on any type of numbers (literals, variables, or expressions):
// Example
var x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23


// he toFixed() Method
// toFixed() returns a string, with the number written with a specified number of decimals:
// Example
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000


// The toPrecision() Method
// toPrecision() returns a string, with a number written with a specified length:

// Example
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600



// The valueOf() Method
// valueOf() returns a number as a number.
//     Example
var x = 123;
x.valueOf();            // returns 123 from variable x
(123).valueOf();        // returns 123 from literal 123
(100 + 23).valueOf();   // returns 123 from expression 100 + 23



// Converting Variables to Numbers
// There are 3 JavaScript methods that can be used to convert variables to numbers:

// The Number() method
// The parseInt() method
// The parseFloat() method
// These methods are not number methods, but global JavaScript methods.


// Number() :      Returns a number, converted from its argument.
// The Number() Method
// Number() can be used to convert JavaScript variables to numbers:
// Example
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN


// parseFloat():	Parses its argument and returns a floating point number
// The parseInt() Method
// parseInt() parses a string and returns a whole number.Spaces are allowed.Only the first number is returned:
// Example
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN 



// parseInt():     Parses its argument and returns an integer
// The parseFloat() Method
// parseFloat() parses a string and returns a number.Spaces are allowed.Only the first number is returned:

Example
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN

// If the number cannot be converted, NaN(Not a Number) is returned.



// MAX_VALUE	Returns the largest number possible in JavaScript'
var x = Number.MAX_VALUE;
console.log(`The max value ${x} is possible`);

// MIN_VALUE	Returns the smallest number possible in JavaScript
var x = Number.MIN_VALUE;
console.log(`The min value of Number in js ${x} is possible`);

// POSITIVE_INFINITY	Represents infinity(returned on overflow)
// NEGATIVE_INFINITY	Represents negative infinity(returned on overflow)
// NaN	Represents a "Not-a-Number" value


//===================================================================================
















