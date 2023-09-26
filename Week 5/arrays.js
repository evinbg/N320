// Array Methods

/* For each */

let arr = [1, 2, 3];
arr.forEach(function(value) {
    console.log("For Each Value: " + value);
})

function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function(value) {
        newArr.push(value * 2);
    })
    return newArr;
}

console.log("Double Values: " + doubleValues(arr));

/* Every: only boolean values */

let eArr = [-1, -2, -3];
let everyFn1 = eArr.every(function(value) {
    return value < 0;
})

console.log("Every Function 1: ", everyFn1);

let everyFn2 = eArr.every(function(value) {
    return value > -2;
})

console.log("Every Function 2: ", everyFn2);

// Check to see if the characters are all lowercase

function allLowerCase(str) {
    return str.split("").every(function(val) {
        return val === val.toLowerCase();
    })
}

console.log("All Lowercase 1: ", allLowerCase("this is a sentence"));
console.log("All Lowercase 2: ", allLowerCase("Today is Thursday"));

// Check to see if all array values are arrays

function allArrays(arr) {
    return arr.every(Array.isArray);
}

console.log("All Arrays 1: ", allArrays([[1, 2], ['Dog', 'Cat'], [3], [true]]));
console.log("All Arrays 1: ", allArrays([[1, 2], ['Dog', 'Cat'], [3], [true], true]));

/* Some: only boolean values */

let sArr = [10, 20, 30];
let someFn1 = sArr.some(function(value) {
    return value < 20;
})
let someFn2 = sArr.some(function(value) {
    return value < 5;
})

console.log("Some Array 1: ", someFn1);
console.log("Some Array 2: ", someFn2);

function hasEvenNum(arr) {
    return arr.some(function(value) {
        return value % 2 == 0;
    })
}

console.log("Has Even Number 1: ", hasEvenNum([1, 2, 3, 4, 5]));
console.log("Has Even Number 2: ", hasEvenNum([11, 21, 33, 41, 15]));

/* Filter */



/* Map */