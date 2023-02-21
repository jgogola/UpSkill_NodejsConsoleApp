const Person = require('./person-class');


class Student extends Person {
    constructor(name, age, gender, major) {
        super(name, age, gender);
        this.major = major;
        this.gpa = 0;
        this.classes = [];
    }


    addClass(className, grade) {
        this.classes.push({ name: className, grade: grade });
        this.calcGPA();
    }

    dropClass(className) {
        this.classes = this.classes.filter(c => c.name !== className);
        this.calcGPA();
    }

    calcGPA() {
        const total = this.classes.reduce((acc, curr) => acc + curr.grade, 0);
        this.gpa = total / this.classes.length;
        return this.gpa;
    }

}

module.exports = Student;