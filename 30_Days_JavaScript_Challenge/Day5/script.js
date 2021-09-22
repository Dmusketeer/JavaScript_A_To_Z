// Regex
// JavaScript Regular Expressions
// A regular expression is a sequence of characters that forms a search pattern.
// The search pattern can be used for text search and text replace operations.

// What Is a Regular Expression ?
    // A regular expression is a sequence of characters that forms a search pattern.
// Regular expressions can be used to perform all types of text search and text replace operations.
// Syntax
//     / pattern / modifiers;



// Using String Methods
// In JavaScript, regular expressions are often used with the two string methods: search() and replace().
// The search() method uses an expression to search for a match, and returns the position of the match.
// The replace() method returns a modified string where the pattern is replaced.

var str = "He is Dheeraj1 and he 12love choco3late.My fevo2rite Chocolate is bor2nville.";
var found = str.search("Dheeraj"); // return the index position.
document.getElementById("demo1").innerHTML=found;


// Using String search() With a Regular Expression
var n = str.search(/My/i);
document.getElementById("demo2").innerHTML = n;


// Using String replace() With a String
// The replace() method replaces a specified value with another value in a string:
var str1 = str.replace("chocolate","chiken");
document.getElementById("demo3").innerHTML = str1;


// Use String replace() With a Regular Expression
var str2 = str.replace(/chocolate/i, "chiken");   // this change the 1st chocolate word. anathor will not change.
document.getElementById("demo4").innerHTML = str2;


// Regular Expression Modifiers
// Modifiers can be used to perform case -insensitive more global searches:
// i----> Perform case -insensitive matching
// g----> Perform a global match(find all matches rather than stopping after the first match)
// m----> Perform multiline matching.
var str3 = str.match(/my/i);
document.getElementById("demo5").innerHTML = str3;

var str4 = str.match(/chocolate/ig);
document.getElementById("demo6").innerHTML = str4;

var str5 = str.match(/^dheeraj/m);
document.getElementById("demo7").innerHTML = str5;



// Regular Expression Patterns
// Brackets are used to find a range of characters:
// [abc]  ---->	Find any of the characters between the brackets
// [0 - 9]---->	Find any of the digits between the brackets
// (x | y)---->	Find any of the alternatives separated with |

var str6 = str.match(/[d|o]/g);
document.getElementById("demo8").innerHTML = str6;


var str7 = str.match(/[1-4]/g);
document.getElementById("demo9").innerHTML = str7;








