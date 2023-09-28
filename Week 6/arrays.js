// Challenge One

const hasAZ = (str) => {
    return str.split("").some(function(value) {
        return value == "z";
    })
}

let string = "hello hi, zebra";

let boo = hasAZ(string);
console.log("Has A Z: " + boo);

// Challenge Two

function hasOnlyOddNum(arr) {
    return arr.every(function(value) {
        return value % 2 !== 0;
    })
}

let array = [11, 1, 3, 13];

let odd = hasOnlyOddNum(array);
console.log("Has Only Odd: " + odd);

/* Filter */

let fArr = [1, 2, 3];

let firstFilter = fArr.filter(function(value) {
    return value > 2;
});

console.log("First Filter: " + firstFilter);

// Only names with 4 letters

let names = ['Carrie', 'Gabe', 'Ben', 'Abbey', 'Will', 'Brendon'];

function fourLetters(arr) {
    return arr.filter(function(value) {
        return value.length == 4;
    })
}

console.log('Has 4 Letters: ' + fourLetters(names));

let classList = ['N115', 'N220', 'N320', 'N317', 'N423', 'N215'];

function upperLevel(arr) {
    return arr.filter(function(value) {
        return value.substr(1, 3) >= 300;
    })
}

console.log("Class Filter: ", upperLevel(classList));

// Objects filter

let students = [
    {first: "Greg", last: "Smith", employed: true},
    {first: "Sally", last: "Richards"},
    {first: "Jake", last: "Farmer", employed: true},
    {first: "Kelce", last: "Rogers"}
]

function filterByIndex(arr, key) {
    return arr.filter(function(value) {
        return !value[key];
    })
}

console.log("Not Employed: ", filterByIndex(students, "employed"));

let students2 = [
    {first: "Greg", last: "Smith", employed: true},
    {first: "Sally", last: "Richards", employed: false},
    {first: "Jake", last: "Farmer", employed: true},
    {first: "Kelce", last: "Rogers", employed: false}
]

function filterByIndex2(arr, key) {
    return arr.filter(function(value) {
        return value[key] == false;
    })
}

console.log("Not Employed 2: ", filterByIndex(students2, "employed"));

/* Map */

let mArr = [2, 3, 4, 5, 6];

let mapArray = mArr.map(function(value, index) {
    return {key: index, value: value * value};
})

console.log("Squared: ", mapArray);

// First names only

let students3 = [
    {first: "Greg", last: "Smith", employed: true},
    {first: "Sally", last: "Richards", employed: false},
    {first: "Jake", last: "Farmer", employed: true},
    {first: "Kelce", last: "Rogers", employed: false}
]

function firstNames(arr) {
    return arr.map(function(value) {
        return value.first;
    })
}

console.log("Only First Names: " + firstNames(students3));

// Value * Index

function vtIndex(arr) {
    return arr.map(function(value, index) {
        return value * index;
    })
}

console.log("Value * Index: ", vtIndex([2, 5, 9,]));

/* Reduce */
// 2 parts: callback, initialValue
// callback: accumulator, nextValue

let reduceArr = [1, 2, 3, 4, 5];

let reduceFn = reduceArr.reduce(function(accumulator, nextValue) {
    return accumulator + nextValue;
}, 10);

console.log("Reduce Function 1: ", reduceFn);

let reduceFn2 = reduceArr.reduce(function(accumulator, nextValue) {
    return accumulator + nextValue;
});

console.log("Reduce Function 2: ", reduceFn2);

let family = ['William', 'Abigail', 'Richie', 'Ben', 'Gabe', 'Mike'];
// Output: My family members are William Abigail Richie

let nameFunction = family.reduce(function(accumulator, nextValue) {
    return accumulator += " " + nextValue;
}, "My family members are");

console.log("Reduce Function 3: " + nameFunction);

// Object Reduction

let familyMembers = [
    {first: 'Abigail', age: 24},
    {first: 'William', age: 21},
    {first: 'Richie', age: 11}
];

function extractValue(arr, key) {
    return familyMembers.reduce(function(accumulator, nextValue) {
        accumulator.push(nextValue[key]);
        return accumulator;
    }, [])
}

console.log("First Name Array: " + extractValue(familyMembers, "first"));

// Short/Long family names
// Using family array

function nameLength(value) {
    return value.length > 4;
}

function partition(arr, callback) {
    return arr.reduce(function(accumulator, nextValue) {
        if(callback(nextValue)) {
            accumulator[0].push(nextValue);
        } else {
            accumulator[1].push(nextValue);
        }
        return accumulator;
    }, [[], []])
}

console.log(partition(family, nameLength));