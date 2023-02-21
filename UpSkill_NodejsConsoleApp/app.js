'use strict';

console.log('Hello world');







// Halt Console....
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter a command to run:', (cmd) => {

    switch (cmd) {
        case 'array':
            runArrayExercise();
            break;
        case 'student':
            runStudentClass();
            break;
        case 'help':
            runHelp();
            break;
        default:
            console.log(`Your command of ${cmd} is not a know feature. Please try again.`);
    }



    console.log('Exiting app.')
    rl.close();
});

function runHelp() {
    console.log('* array: Use to run the Array exercise');
    console.log('* student: Use to run the Student Class exercise.');
}



// Run with command: array
function runArrayExercise() {
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

function runStudentClass() {
    const Student = require('./student-class');

    
    const student = new Student('Jason Vorhees', 20, 'male', 'Computer Science');
    student.addClass('Programming 101', 4.0);
    student.addClass('Data Structures', 3.8);
    student.addClass('Algorithms', 3.5);
    console.log(`* Created student ${student.name} and added 3 classes. Please see the calculated GPA of ${student.gpa}.`);
    console.log(student);


    student.dropClass('Algorithms');
    console.log(`* Removed class of Algorithms and recalculated the GPA to ${student.gpa}.`);
    console.log(student);


    // Destructure example.
    const { name, age, gender, major, gpa, classes } = student;
    console.log(`* Destructured example: Student Name=${name}, GPA=${gpa}.`);
    
}


