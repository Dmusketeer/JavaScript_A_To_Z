# --------------------------- Promises ---------------------------
## promise has three states:

- Pending: you don’t know if you will complete learning JavaScript by the next month.
- Fulfilled: you complete learning JavaScript by the next month.
- Rejected: you don’t learn JavaScript at all.

## Creating a promise: the Promise constructor

- The Promise constructor accepts a function as an argument. This function is called the executor.

- The executor accepts two functions with the names, by convention, resolve() and reject(). 

Once a new Promise object is created, it is in the pending state until it is resolved. To schedule a callback when the promise is either resolved or rejected, you call the methods of the Promise object: <b> then(), catch(), and finally(). </b>

## Consuming a Promise: then, catch, finally
1) The then() method:<br/>
The then() method is used to schedule a callback to be executed when the promise is successfully resolved.

    The then() method takes two callback functions:

    `promiseObject.then(onFulfilled, onRejected);`<br/>
The onFulfilled callback is called if the promise is fulfilled. The onRejected callback is called when the promise is rejected.



