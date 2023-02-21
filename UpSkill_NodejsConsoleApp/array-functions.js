/*
 * Array syntax exercises. 
 * Use of ES6 functions. 
 */

// Array of numbers to be used in exercies.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function mapNumbersToDouble() {
    // Map function to clone the numbers array into the doulbed array, but with each element value multiplied by 2:
    const doubled = numbers.map(number => number * 2);
    console.log('Map used to double all the values to doubled: ',doubled);
}


function reduceNumbersToSum() {
    // Reduce function to calculate the total sum of the numbers array values:
    // Note: The first param is the "accumulator" variable.
    const sum = numbers.reduce((total, currentValue) => { return total + currentValue }, 0);
    console.log('Reduce used to get sum of all numbers: ', sum);

}

function filterNumbersGreaterThen5() {
    const filteredNumbers = numbers.filter(number => number > 5);
    console.log('Filter used to get array of numbers greater then 5: ', filteredNumbers);
}

function someCheckForHasEvenNumbers() {
    const hasEvenNumber = numbers.some(number => number % 2 === 0);

    return hasEvenNumber;
}

function spreadMathMax(moreNumbers = [11, 12, 13]) {

    const filteredMoreNumbers = moreNumbers.filter(item => typeof item === "number");

    const allNumbers = [...numbers, ...filteredMoreNumbers];
    const maxNumber = Math.max(...allNumbers);
    console.log('Spread used to combine 2 arrays and then pass that array into the Math.max method. New Max Number: ', maxNumber)
}


module.exports = {
    numbers: numbers,
    mapNumbersToDouble: mapNumbersToDouble,
    reduceNumbersToSum: reduceNumbersToSum,
    filterNumbersGreaterThen5: filterNumbersGreaterThen5,
    someCheckForHasEvenNumbers: someCheckForHasEvenNumbers,
    spreadMathMax: spreadMathMax
};

