// JavaScript Objects
// In JavaScript, objects are king.If you understand objects, you understand JavaScript.


// In JavaScript, almost "everything" is an object.

// Booleans can be objects(if defined with the new keyword)
// Numbers can be objects(if defined with the new keyword)
// Strings can be objects(if defined with the new keyword)
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are always objects
// All JavaScript values, except primitives, are objects.



// JavaScript Primitives
// A primitive value is a value that has no properties or methods.

// A primitive data type is data that has a primitive value.

// JavaScript defines 5 types of primitive data types:

// string
// number
// boolean
// null
// undefined
// Primitive values are immutable(they are hardcoded and therefore cannot be changed).

var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

// A JavaScript object is a collection of named values
// Object Methods
// Methods are actions that can be performed on objects.
// An object method is an object property containing a function definition.
// Creating a JavaScript Object

// There are different ways to create new objects:
// Define and create a single object, using an object literal.
// Define and create a single object, with the keyword new.
//     Define an object constructor, and then create objects of the constructed type.




//                                          1.Using an Object Literal
// This is the easiest way to create a JavaScript Object.
// Using an object literal, you both define and create an object in one statement.
// An object literal is a list of name: value pairs(like age: 50) inside curly braces { }.

var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
// Spaces and line breaks are not important.An object definition can span multiple lines:
var person = { 
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
 };

// Using the JavaScript Keyword new

var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
// The two examples above do exactly the same.There is no need to use new Object().
// For simplicity, readability and execution speed, use the first one(the object literal method).


// JavaScript Objects are Mutable
// Objects are mutable: They are addressed by reference, not by value.



// If person is an object, the following statement will not create a copy of person:

// var x = person;  // This will not create a copy of person.
// The object x is not a copy of person.It is person.Both x and person are the same object.

// Any changes to x will also change person, because x and person are the same object.

//     Example:
// var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" }

// var x = person;
// x.age = 10;           // This will change both x.age and person.age










// --------------------------------------------------------------------------
//                        JavaScript Object Properties:
// --------------------------------------------------------------------------


// Properties are the most important part of any JavaScript object.
// JavaScript Properties
// Properties are the values associated with a JavaScript object.

// A JavaScript object is a collection of unordered properties.

// Properties can usually be changed, added, and deleted, but some are read only.

// Accessing JavaScript Properties
// The syntax for accessing the property of an object is:

// objectName.property         // person.age
// or

// objectName["property"]      // person["age"]
// or

// objectName[expression]      // x = "age"; person[x]

// var person = {
//     firstname: "Dheeraj",
//     lastname: "Tiwari",
//     age: 25,
//     eyecolor: "black"
// };

// document.getElementById("demo").innerHTML ="Person Name : "+ person.firstname + " " + person.lastname; // .method
// Example 2
// document.getElementById("demo").innerHTML=person["firstname"] + " is " + person["age"] + " years old.";// bracket method.



//                                   JavaScript for...in Loop:
// The JavaScript for...in statement loops through the properties of an object.

//     Syntax :
// for (variable in object) {
//     // code to be executed
// }
// The block of code inside of the for...in loop will be executed once for each property.

var text = ""
var Person={
    fname:"Dheeraj",
    lname:"Tiwari",
    age:26, 
    country:"india"
}
// for( details in Person){
//     text += Person[details]+" "
// }
// document.getElementById("demo").innerHTML = text;

// Adding New Properties
// You can add new properties to an existing object by simply giving it a value.
// Assume that the person object already exists - you can then give it new properties:

Person.fevColor="maroon";
document.getElementById("demo").innerHTML = Person.fevColor;

// Deleting Properties
// The delete keyword deletes a property from an object:


// The delete keyword deletes both the value of the property and the property itself.