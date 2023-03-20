/*
 * Array syntax exercises. 
 * Use of ES6 functions. 
 */





function sumEvenNumbersInArray(numbers) {

    const evenNumbers = numbers.filter(number => number % 2 === 0 );
    const sum = evenNumbers.reduce((sum, number) => { return sum + number },0);

    console.log(`Sum of all even numbers is: ${sum}.`);
}

function findMinMaxAvgGrade(grades) {

    const sumGrades = grades.reduce((sum, grade) => { return sum + grade },0);
    const avgGrade = sumGrades / grades.length;
    const minGrade = Math.min(...grades);
    const maxGrade = Math.max(...grades);

    console.log(`Minimum Grade: ${minGrade}. Maximum Grade: ${maxGrade}. Average Grade: ${avgGrade}.`);
}

function findLonelyNumbers(numbers) {

    // If a number's first index and last index are the same, then it ocurs only once.
    const lonelyNumbers = numbers.filter(num => numbers.indexOf(num) === numbers.lastIndexOf(num), {});


    console.log(`Lonely Numbers: ${lonelyNumbers}.`);
}


module.exports = {
    sumEvenNumbersInArray: sumEvenNumbersInArray,
    findMinMaxAvgGrade: findMinMaxAvgGrade,
    findLonelyNumbers: findLonelyNumbers
};

