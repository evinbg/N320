// Reduce challenge

let arr = [1, 2, 3, 4, 5];

let reduceFn = arr.reduce(function(accumulator, nextValue) {
    let num = nextValue * nextValue;
    if(num % 2 == 0) {
        return accumulator + num;
    }
    return accumulator;
}, 50);

console.log(reduceFn);

/* Rest */

function add(...nums) {
    let total = 0;

    for (const n of nums) {
        total += n;
    }

    return total;
}

console.log("Add Function: ", add(1, 3, 5, 7, 9));
console.log("Add Function 2: ", add(arr)); // Doesn't work with arrays

function printVal(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

printVal(1, 2, 3, 4, 5, 6, 7, 8);
printVal(1, 2);
printVal(1);
printVal("happy", "halloween", "october");

function cb(num1, num2, ...mValues) {
    let total = mValues.reduce(function(accm, next) {
        accm += next;
        return accm;
    }, 0);

    let myAvg = total / mValues.length;
    console.log("Total: " + total);
    console.log("Average: ", myAvg);
}

function higherOrder(num1, num2, cb) {
    let a = num1 + num2;
    let s = num1 - num2;
    let m = num1  * num2;
    let d = num1 / num2;
    cb(num1, num2, a, s, m, d);
}

higherOrder(4, 2, cb);

/* Spread */ // Takes an array and SPREADS them out to individual values

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let combine = [...arr1, ...arr2, ...arr3];
console.log("Spread: " + combine);
console.log('Max Value: ', Math.max(...combine));

function sumVal(a, b, c) {
    return a + b + c;
}
console.log("Sums: ", sumVal(...arr1));

// Start: [1, 6] [2, 3, 4, 5]
// End: [1, 2, 3, 4, 5, 6]

function inMiddle(arr, vals) {
    let mid = Math.floor(arr.length / 2); // midpoint
    arr.splice(mid, 0, ...vals);
    return arr;
}

console.log("Place In Middle: ", inMiddle([1, 6], [2, 3, 4, 5]));

