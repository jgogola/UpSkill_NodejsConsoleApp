/*
 * Array syntax exercises. 
 * Use of ES6 functions. 
 */

// Array of numbers to be used in exercies.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function mapNumbersToDouble() {

    // The map() function - A built-in function that creates a new array by applying a function to each element of the original array. 
    const doubled = numbers.map(number => number * 2);
    console.log('Map used to double all the values to doubled: ',doubled);
}


function reduceNumbersToSum() {

    // The reduce() function - A built-in function that reduces an array to a single value by applying a function to each element of the array. 
    // Note: The first param is the "accumulator" variable.
    const sum = numbers.reduce((total, currentValue) => { return total + currentValue }, 0);
    console.log('Reduce used to get sum of all numbers: ', sum);

}

function filterNumbersGreaterThen5() {

    // The filter() function - A built-in function that creates a new array with all the elements that pass a test specified by a provided function. 
    const filteredNumbers = numbers.filter(number => number > 5);
    console.log('Filter used to get array of numbers greater then 5: ', filteredNumbers);
}

function someCheckForHasEvenNumbers() {

    // The some() function - A built-in function that tests whether at least one element in an array passes a provided test. 
    // Returns true or false.
    const hasEvenNumber = numbers.some(number => number % 2 === 0);

    return hasEvenNumber;
}

function spreadMathMax(moreNumbers = [11, 12, 13]) { // Default param value.

    // First sanitize for any non number types using the fitler() function.
    const filteredMoreNumbers = moreNumbers.filter(item => typeof item === "number");

    // The spread operator - A shorthand syntax for spreading the elements of an array into a new array. 
    const allNumbers = [...numbers, ...filteredMoreNumbers];  // Used to combine two arrays into one new.
    const maxNumber = Math.max(...allNumbers); // Used to pass an array as a single object.

    console.log('Spread used to combine 2 arrays and then pass that array into the Math.max method. New Max Number: ', maxNumber)
}


function joinArrayValues() {
    const fruits = ['Apple', 'Pear', 'Orange'];
    console.log(fruits.join(','));
}



module.exports = {
    numbers: numbers,
    mapNumbersToDouble: mapNumbersToDouble,
    reduceNumbersToSum: reduceNumbersToSum,
    filterNumbersGreaterThen5: filterNumbersGreaterThen5,
    someCheckForHasEvenNumbers: someCheckForHasEvenNumbers,
    spreadMathMax: spreadMathMax,
    joinArrayValues: joinArrayValues
};

