const amount = 20; // amount of data you want

const fetchPromise = fetch("https://api.quotable.io/quotes?limit=" + amount); // promise to fetch data from the API

fetchPromise.then(function(response) {
    const jPromise = response.json(); // parsing as JSON
    jPromise.then(function(data) {
        asyncFnForDisplay(data);
    })
}).catch(function(err) {
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

async function asyncFnForDisplay(data) { // async function to display fetched data in HTML
    let container = document.getElementById("container");
    for(let i = 0; i < amount; i++) {
        // creating a bubble
        let bubble = document.createElement("div");
        bubble.className = "bubble";
        container.appendChild(bubble);

        // creating where to put quote
        let quote = document.createElement("p");
        quote.className = "quote";
        bubble.appendChild(quote);

        // creating where to put name
        let name = document.createElement("p");
        name.className = "name";
        bubble.appendChild(name);

        // adding the data to the HTML
        quote.innerHTML = `<b>" ${data.results[i].content} "</b>`;
        name.innerHTML = `<b><i>- ${data.results[i].author}</i></b>`;

        // restyling newly created elements because auto is based on the data
        bubble.style.height = 'auto';
        quote.style.height = 'auto';
        name.style.width = 'auto';
    }
}