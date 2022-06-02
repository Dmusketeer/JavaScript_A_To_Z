# ----------------------------- Arrays --------------------------------

- In JavaScript, an array is an order list of values. Each value is called an element specified by an index.
- An array can hold values of mixed types.
- JavaScript arrays are dynamic. They grow or shrink as needed.

## Basic operations on arrays ⬇ 
- push
- pop
- shift(remove 1st ele at beginning of array)
- unshift(add element at beginning of array)
- indexOf() : To find the index of an element
- Array.isArray() : To check if a value is an array


## What exactly is the JavaScript Array length property
- By definition, the length property of an array is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

- The value of the length is 2^32. It means that an array can hold up to 4294967296 (2^32) elements.
- The length property of an array is an unsigned, 32-bit integer that is always numerically greater than the highest index of the array.
- The length returns the number of elements that a dense array has.
- For the spare array, the length doesn’t reflect the number of actual elements in the array.
- Modifying the length property can remove elements from the array or make the array spare.



