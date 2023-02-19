'use strict';

console.log('Hello world');


/*
 * Array syntax exercises. 
 * Use of ES6 functions. 
 */

// Array of numbers to be used in exercies.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


// Map function to clone the numbers array into the doulbed array, but with each element value multiplied by 2:
const doubled = numbers.map(number => number * 2);
console.log(doubled);


// Reduce function to calculate the total sum of the numbers array values:
// Note: The first param is the "accumulator" variable.
const sum = numbers.reduce((total, currentValue) => { return total + currentValue },0);
console.log(sum);




// Halt Console....
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Press Enter to continue...', () => {
    console.log('Resuming program...');
    rl.close();
});
