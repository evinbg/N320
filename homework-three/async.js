const amount = 20; // amount of data you want

async function getData() { // async function to fetch data from API
    const response = await fetch("https://dog.ceo/api/breeds/image/random/" + amount); // API call
    const results = await response.json(); // parsing as JSON

    return results;
}

getData().then((data) => {
    asyncFnForDisplay(data);
}).catch((err) => {
    let errorMsg = "Failed to fetch data";
    let error = new Error(errorMsg); // error through new Error object
    
    // displaying error if promise is rejected
    console.log(error);
    let h2 = document.getElementsByTagName('h2')
    let errorP = document.createElement("p");
    let msg = document.createTextNode(error);
    errorP.appendChild(msg);
    h2[0].appendChild(errorP);
})

async function asyncFnForDisplay(data) { // async function that takes fetched data and displays it
    let container = document.getElementById('container');
    for(let i = 0; i < amount; i++) {
        let img = document.createElement("img"); // creating a new image
        img.src = data.message[i]; // adding the source from data
        container.appendChild(img); // appending the image to the container
    }
}