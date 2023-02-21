'use strict';

console.log('Hello world');







// Halt Console....
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter a command to run:', (cmd) => {

    if (cmd === 'array') arrayExercise();


    console.log('Exiting app.')
    rl.close();
});



// Run with command: array
function arrayExercise() {
    const af = require('./array-functions');

    console.log('Initial numbers array: ', af.numbers);
    af.mapNumbersToDouble();
    af.reduceNumbersToSum();
    af.filterNumbersGreaterThen5();
    af.spreadMathMax([20,21,'A',35]);

    if (af.someCheckForHasEvenNumbers) {
        console.log('Even numbers exist.');
    } else {
        console.log('No even numbers exist.');
    }


}


