
// DAY2

// JavaScript Arrays
// car Array
var cars = ["Saab", "Volvo", "BMW"];

// we can use the index number too access the array elements

// creates an Array  JavaScript Keyword new

var cars = new Array("audi", "maruti", "Bmw");
// There is no need to use new Array().coz it reduces the excution speed of the programs.

// Access the Elements of an Array
var firstCar = cars[0];

// Changing an Array Element
cars[0] = "mercedes";
console.log(cars);


// Arrays use numbers to access its "elements". while Objects use names to access its "members"
// example: cars[0]-------->array
// cars.firstName


// Array Elements Can Be Objects
cars[2] = Date();
cars[3] = add(2, 3);
cars[4] = cars[0];
// Array Properties and Methods
var x = cars.length;   // The length property returns the number of elements
var y = cars.sort();   // The sort() method sorts arrays

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.length;   // the length of fruits is 4

fruits = ["Banana", "Orange", "Apple", "Mango"];
var first = fruits[0];

fruits = ["Banana", "Orange", "Apple", "Mango"];
var last = fruits[fruits.length - 1];

// Looping Array Elements
// 1.using a for loop:
// 2.Array.forEach() function:

// Adding Array Elements
// 1.using push()
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");    // adds a new element (Lemon) to fruits
// 2.using length
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Lemon";    // adds a new element (Lemon) to fruits
// WARNING!
// Adding elements with high indexes can create undefined "holes" in an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[6] = "Lemon";    // adds a new element (Lemon) to fruits


// Associative Arrays
// Many programming languages support arrays with named indexes.

// Arrays with named indexes are called associative arrays(or hashes).

// JavaScript does not support arrays with named indexes.

// In JavaScript, arrays always use numbered indexes.


// The Difference Between Arrays and Objects
// In JavaScript, arrays use numbered indexes.

// In JavaScript, objects use named indexes.



// How to Recognize an Array

Array.isArray(fruits);   // returns true because
// The instanceof operator returns true if an object is created by a given constructor:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits instanceof Array;   // returns true


