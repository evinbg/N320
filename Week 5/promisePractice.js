/*const threePromises = async () => {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise 1");
            resolve(1);
        }, 1000);
    });

    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise 2");
            resolve(2);
        }, 2000);
    });
    
    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise 3");
            resolve(3);
        }, 3000);
    });

    const combined = Promise.all([p1, p2, p3]);
    return combined;
}

const asyncFunc = async () => {
    const data = await threePromises();
    console.log(data);
}

asyncFunc();
*/

// Async Function with an API Call

async function goChuck() {
    // API call
    const response = await fetch("https://api.chucknorris.io/jokes/random");

    // format into JSON
    const results = await response.json();

    return results;
}

goChuck().then((data) => {
    console.log(data);
    let chuckMsg = document.createElement("p");
    chuckMsg.innerHTML = data.value;
    document.getElementsByTagName('body')[0].appendChild(chuckMsg);
}).catch((err) => {
    console.log("There was an error.");
})