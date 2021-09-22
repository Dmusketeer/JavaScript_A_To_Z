let [frnd1, frnd2, frnd3] = ["Dheeraj","Prakhar","Dinesh"];

console.log(frnd1)
console.log(frnd2)
console.log(frnd3)

// arrray destructuring
let [frnd1, frnd2, frnd3, ...others] = ["Dheeraj","Prakhar","Dinesh","Rajnikant","Naman","Saksham"];
const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

const foo = ['one', 'two'];
const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue);  //undefined

// Default values
let a, b;
[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7

console.log("================================");
console.log(others);



// object destructuring

const user = {
    id: 42,
    is_verified: true
};

const { id, is_verified } = user;

console.log(id); // 42
console.log(is_verified); // true

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

// Assigning to new variable names
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true

// Default values
const { a = 10, b = 5 } = { a: 3 };

console.log(a); // 3
console.log(b); // 5

// Assigning to new variables names and providing default values
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5


// Unpacking fields from objects passed as a function parameter
const user = {
    id: 7,
    displayName: 'Dheeraj',
    fullName: {
        firstName: 'Tiwari',
        lastName: 'Tiwari'
    }
};

function userId({ id }) {
    return id;
}

function whois({ displayName, fullName: { firstName: name } }) {
    return `${displayName} is ${name}`;
}

console.log(userId(user)); // 42
console.log(whois(user));  // "jdoe is John"
