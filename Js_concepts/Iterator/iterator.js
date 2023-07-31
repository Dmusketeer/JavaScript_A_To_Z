// ES6 introduced a new loop construct called for...of to eliminate the standard loop’s
// complexity and avoid the errors caused by keeping track of loop indexes.
// On top of this, the for...of loop has the ability to create a loop over any iterable object, not just an array.

// There are two iteration protocols: iterable protocol and iterator protocol.

// an object is qualified as an iterator when it has a next() method that returns an object with two properties:
// an object is qualified as an iterator when it has a next() method that returns an object with two properties:
// { value: 'next value', done: false }
// {done: true: value: undefined}
// The value of the done property indicates that there is no more value to return and the value of the property is set to undefined.

// An object is iterable when it contains a method called [Symbol.iterator] that takes no argument and returns an object which conforms to the iterator protocol.
// The [Symbol.iterator] is one of the built-in well-known symbols in ES6.

// The following code creates a Sequence object that returns a list of numbers in the range of ( start, end)
// with an interval between subsequent numbers.

class Sequence {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start;
    this.end = end;
    this.interval = interval;
  }
  [Symbol.iterator]() {
    let counter = 0;
    let nextIndex = this.start;
    return {
      next: () => {
        if (nextIndex <= this.end) {
          let result = { value: nextIndex, done: false };
          nextIndex += this.interval;
          counter++;
          return result;
        }
        return { value: counter, done: true };
      },
      return: () => {
        return { value: undefined, done: true };
      },
    };
  }
}

let evenNumber = new Sequence(2, 10, 2);
for (let num of evenNumber) {
  if (num > 9) {
    break;
  }
  console.log(num);
}

// Cleaning up
// In addition to the next() method, the [Symbol.iterator]() may optionally return a method called return().

// The return() method is invoked automatically when the iteration is stopped prematurely.
// It is where you can place the code to clean up the resources.
