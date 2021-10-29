let name = "Dheeraj"
let age = 26
let address = "kushinagar"
let married = false
let fullAdress = `I a\'m ${name} from ${address} my age is ${age}.`
console.log(fullAdress)
console.log(fullAdress.length) // 43
console.log(address[0]) //k
console.log(address[address.length - 1]) // r

console.log(married.toString()) //
console.log(typeof married) // boolean
console.log(name > address) //false

console.log(name.valueOf()) // Dheeraj
console.log(name.toLocaleString()) // Dheeraj
console.log(name.toUpperCase())

// String manipulation
// Concatenating strings
let fullName = name.concat(' ', "Tiwari")
console.log(fullName)


// Extracting substrings
console.log(name.substring(4, 7))

//  Locating substrings
// To locate a substring in a string, you use the indexOf() method?
// The indexOf() returns the index of the first occurrence of the substring in the string
console.log(name.indexOf("raj"))


// Removing whitespace characters
// To remove all leading and trailing whitespace characters of a string, you use the trim() method
// Note that the trim() method creates a copy of the original string with whitespace characters stripped, it doesn’t change the original string.
let love = "      I                  LOVE             U          "
console.log(love.trim())
