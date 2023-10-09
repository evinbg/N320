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

    majorText() {
        console.log(`I am a student majoring in ${this.major}.`);
    }
}

let Abigail = new Student("Abigail", 23, 'Theater');
Abigail.greeting();
Abigail.majorText();

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    vInfo() {
        return `This vehicle is a ${this.year} ${this.make} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(doors, transmission, ...args) {
        super(...args);
        this.doors = doors;
        this.transmission = transmission;
        this.wheels = 4;
    }
}

let charger = new Car(4, 'automatic', 'Doge', 'Charger', 2000);

console.log(charger.vInfo());
console.log(charger.doors, charger.transmission, charger.wheels);

class Motorcycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
    caution() {
        return "Make sure you purchase a helmet.";
    }
}

let hdCycle = new Motorcycle("Harley Davidson", "ES210", 2023);

console.log(hdCycle.vInfo());
console.log(hdCycle.caution());