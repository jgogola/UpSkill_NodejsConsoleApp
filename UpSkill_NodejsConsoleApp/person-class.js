class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getBirthYear() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    }

}

module.exports = Person