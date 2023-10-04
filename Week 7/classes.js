class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Welcome, ${this.name}. You are ${this.age} years old.`);
    }
}

let William = new Person("William", 21);
William.greeting();

// Extend classes

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    greeting() {
        super.greeting();
        console.log(`I am a student majoring in ${this.major}.`);
    }
}

let Abigail = new Student("Abigail", 23, 'Theater');
Abigail.greeting();