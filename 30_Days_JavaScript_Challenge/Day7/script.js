// arrow function
// js function syntax
function fnc(){
    return "Dheeraj";
}

// Arrow function syntax
const fnc1=()=>{
    return "Dheeraj";
}


// #------------------------------------------------
// Destructuring 
// Array Destructuring
[a,b] = [8,19];
console.log(a);//8
console.log(b);//9

// Object Destructuring: 
var {c,d}={c:10,d:19};
console.log(c);//10
console.log(d);//19

// #-----------------------------------------------------
// Spead operator
[a,b,...rest]=[9,12,43,98,20,54,1,34];
console.log(a)//9
console.log(b)//12
console.log(rest)//[43, 98, 20, 54, 1, 34]

// #-------------------------------------------------------
// String Interpolation or Template Literals
var Name="Dheeraj";
var msg=` hello ${Name} `;
console.log(msg);

// #----------------------------------------------------------
// Rest Parameter
function foo(x,y,...rest){
    return rest;
}
console.log(foo([1,2,3,4,5,6,7,8]));


// #------------------------------------------------------------
// Dynamic Object Property Name
const property="name";
const obj={
    age:26, 
    [property]:"Dheeraj"
};
console.log(obj);
console.log(obj.name);

// #--------------------------------------------------------------
// for-of loop
const myArr=[1,2,3,4,5,6,7,8];
for(let i of myArr){
    console.log(i);
}
