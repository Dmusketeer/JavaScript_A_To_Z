// Freeze
// Const make objects immutable, but it's value can still be modified. To prevent the modification and make object immutable, use the freeze() function.

const x = { name: "Abc", age: 20 };
x.age = 25;
console.log(x);
//{ name: 'Abc', age: 25 }

const x = Object.freeze({ name: "Abc", age: 20 });
x.age = 25;
console.log(x);
//{ name: 'Abc', age: 20 }