
// Creating a promise

let GoodMarks = false
// producing Code

// producing + consuming code
let birthdayCelebrations = new Promise((resolve, reject) => {
    if (GoodMarks) {
        resolve('you\'ll get a car on your birthday')
    } else {
        reject('your marks is not good so you\'ll not get a car on your birthday')
    }
}).then(
    (value) => { console.log(value) }
    // (err) => { console.log(err) }
).catch(
    (err) => { console.log(err) }
).finally(() => { console.log('finally done promise') })


// consuming code
// birthdayCelebrations.then(
//     (value) => { console.log(value) }
//     // (err) => { console.log(err) }
// ).catch(
//     (err) => { console.log(err) }
// ).finally(() => { console.log('finally done promise') })


// Consuming a Promise: then, catch, finally
