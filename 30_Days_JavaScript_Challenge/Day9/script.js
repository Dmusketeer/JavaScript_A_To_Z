// Check string is palindrome or not 
const isPalindrome = str => str === str.split('').reverse().join('');
console.log(isPalindrome("naman"));
console.log(isPalindrome("Dheeraj"));

//how to convert string to numbers:
const stringToNumber = str => ''+str;
// const stingToNumber = str => Number(str);
console.log(stringToNumber('7'));

// use of every
const allEqual = arr => arr.every(val=>val===arr[0]);
console.log(allEqual([1, 2, 3, 4, 4, 5])); //false
console.log(allEqual([1, 1, 1, , 1, 1])); //true