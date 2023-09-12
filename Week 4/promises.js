// 3 states of promises: pending, fulfilled, rejected

let basicPromise = new Promise(function(resolve, reject) {
    let x = 10;
    if(x == 10) {
        resolve();
    } else {
        reject();
    }
})

basicPromise.then(function() {
    document.write("Basic Promise Resolved");
}, function() {
    document.write("Basic Promise Rejected");
})

// Another basic promise using catch

const cPromise = new Promise(function(resolve, reject) {
    let newNum = Math.random();
    if(newNum < 0.5) {
        resolve(newNum);
    } else {
        reject(newNum);
    }
})

cPromise.then(function(num) {
    console.log("Promise Resolved: ", num);
}).catch(function(num) {
    console.log("Promise Rejected: ", num);
})

// Promise with a setTimeout

const rNumPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let ranNum = Math.floor(Math.random() * 10) + 1;
        resolve(ranNum);
    }, 2000);
})

rNumPromise.then(function(data) {
    console.log("setTimeout Promise Resolved: ", data);
})

console.log("setTimeout Initiated");

// Promise Chaining

const promiseChain = new Promise(function(resolve, reject) {
    resolve(5);
});

promiseChain.then(function(data) {
    return (data * 2);
}).then(function(data) {
    return (data + 20);
}).then(function(data) {
    console.log(data);
})

// Data from an external source

const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

console.log("Fetched Promise: ", fetchPromise);

fetchPromise.then(function(response) {
    const jPromise = response.json();
    jPromise.then(function(data) {
        console.log("Data Received: ", data[2].name);
    })
})