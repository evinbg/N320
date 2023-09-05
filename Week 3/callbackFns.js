// Working the DOM

// Return one element: querySelector
document.querySelector('div>ul>li:first-child').innerHTML = "querySelector";
document.querySelector('.my').innerHTML = "querySelector p";

// Grab a list
document.getElementsByClassName('my')[1].innerHTML = "class name";
document.getElementsByTagName('li')[1].innerHTML = "second list item";
document.querySelectorAll('body>ul>li')[0].innerHTML = "querySelectorAll";

// Single values:
// getElementById
// querySelector

// Lists:
// getElementsByClassName
// getElementsByTagName
// querySelectorAll


function callBack() {
    console.log("This is a callback function.");
}

function higherOrder(newFn) {
    console.log("Before callback");
    newFn();
    console.log("After calling function");
}

higherOrder(callBack);

function firstFunction(msg) {
    alert(msg);
}

function middleFunction(msg) {
    console.log(msg);
}

function lastFunction(msg) {
    return confirm(msg);
}

firstFunction("My Message");
middleFunction("My Message");
lastFunction("My Message");

const startFunction = (msg, nFn) => {
    alert(msg);
    nFn(msg, endFunction);
}

const nextFunction = (msg, eFn) => {
    console.log(msg);
    eFn(msg);
}

const endFunction = (msg) => {
    return confirm(msg);
}

startFunction("Callback message...", nextFunction);


const costTable = (subT, tip, total) => {
    let createList = `<ul>
    <li>Subtotal: ${subT}</li>
    <li>Tip: ${tip}</li>
    <li>Total: ${total}</li>
    </ul>`;
    document.write(createList);
}

const calcTotal = (subT, tip, callback, taxRate = 0.07) => {
    let total = subT + (subT * taxRate) + tip;
    total = total.toFixed(2);
    callback(subT, tip, total);
}

calcTotal(34.95, 10.50, costTable);