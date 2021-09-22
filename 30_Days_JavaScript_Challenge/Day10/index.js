// Generate an array sequence in javaScript using Array Metods.

const arraySequenceGenerator = (firstElement, lastElement, difference) =>
    Array.from(
        { length: ((lastElement - firstElement) / difference) + 1 },
        (x, index) => x = firstElement + (index * difference)
    );
console.log(arraySequenceGenerator(100, 500, 100));




