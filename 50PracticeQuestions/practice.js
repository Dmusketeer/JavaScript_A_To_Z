//1. Print numbers from 1 to 10
for(let i=1;i<=10;i++){
    console.log(i)
}

console.log("*")

// 2.Print the odd numbers less than 100

for(let i=1;i<100;i++){
    if(i%2!=0){
        console.log(i)
    }
}

console.log("**")


// 3.Print the multiplication table with 7



for(let i=1;i<11;i++){
    console.log(7*i)
}


console.log("***")


//4.Print all the multiplication tables with numbers from 1 to 10.
for(let i=1;i<11;i++){
    for(let j=1;j<11;j++){
        console.log(i*j)
    }
}

console.log("****")

// 5.Calculate the sum of numbers from 1 to 10.
function sum1To10() {
    var sum=0;
for(let i=1;i<11;i++){
    sum+=i
}
return sum;
}
console.log(sum1To10())

// 6.Calculate 10!

function factorialOf10(){
    var fact=1
    for(let i=1;i<11;i++){
        fact=fact*i
    }
    return fact
}

console.log(factorialOf10())


console.log("*****")
//7.Calculate the sum of even numbers greater than 10 and less than 30
function sumOfEvenNumBetween10To30() {
var sum=0;
for(let i=11;i<30;i++){
    if (i%2==0) {
      sum=sum+i  
    }
}
return sum
}
console.log(sumOfEvenNumBetween10To30())

console.log("******")























console.log("******")