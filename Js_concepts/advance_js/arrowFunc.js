// Before arrow function : 
var a = 10, b = 10;
 const myfunction = function (){

     return a+b;
 }
 console.log(myfunction());



//  Arrow function:

// oneliner arrow function no need of braces , return keyword.
myfunction = () => a+b ;
console.log(myfunction());


myfunction = () => {
    return a+b ;
}
console.log(myfunction());



// Arrow function with parameters
myfunction = (a,b) => {
    return a+b ;
} 
console.log(myfunction(10,13));

