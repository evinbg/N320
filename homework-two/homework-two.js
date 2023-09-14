// random numbers chosen (1-10)
let ranNum1 = Math.floor(Math.random() * 10) + 1;
let ranNum2 = Math.floor(Math.random() * 10) + 1;

// callback function
const callback = (arr) => {
    // looping through array to find total
    let total = 0
    for (let i = 2; i < arr.length; i++) {
        total += arr[i];
    }
    let average = total / 4;

    // displaying information by targeting without IDs
    document.getElementsByTagName('p')[0].innerHTML = `Numbers Chosen: ${arr[0]} ${arr[1]}`;
    document.getElementsByTagName('p')[1].innerHTML = `Total: ${total}`;
    document.getElementsByTagName('p')[2].innerHTML = `Average: ${average}`;
}

// higher order function
const higherOrder = (num1, num2, cbFn) => {
    // using an array to store information in one place
    let arithmetic = [];
    arithmetic[0] = num1;
    arithmetic[1] = num2;
    arithmetic[2] = num1 + num2;
    arithmetic[3] = num1 - num2;
    arithmetic[4] = num1 * num2;
    arithmetic[5] = num1 / num2;
    cbFn(arithmetic);
}

higherOrder(ranNum1, ranNum2, callback);