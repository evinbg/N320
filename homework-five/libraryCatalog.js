// grabbing html elements
let heading = document.getElementsByTagName('h1')[0];
heading.innerHTML = "Library Catalog";

let firstDivHeading = document.getElementsByClassName('desc')[0];
firstDivHeading.innerHTML = "Catalog Items:";

let secondDivHeading = document.getElementsByClassName('desc')[1];
secondDivHeading.innerHTML = "Updated Catalog Items:";

let firstDiv = document.getElementsByTagName('div')[0];
let secondDiv = document.getElementsByTagName('div')[1];

// creating places for outputs
let firstDisplay = document.createElement('p');
firstDisplay.classList = "display";
firstDiv.appendChild(firstDisplay);

let firstTotal = document.createElement('p');
firstTotal.innerHTML = "<b>Total Value of Catalog: </b>"
firstTotal.classList = "total";
firstDiv.appendChild(firstTotal);

let secondDisplay = document.createElement('p');
secondDisplay.classList = "display";
secondDiv.appendChild(secondDisplay);

let secondTotal = document.createElement('p');
secondTotal.innerHTML = "<b>Total Value of Catalog: </b>"
secondTotal.classList = "total";
secondDiv.appendChild(secondTotal);

// abstract class for other classes to inherit
class Media {
    constructor(id, title, publicationYear, value) {
        this.id = id;
        this.title = title;
        this.publicationYear = publicationYear;
        this.value = value;
    }
}

// individual item types that extend the Media class
class Books extends Media {
    constructor(author, genre, ...args) {
        super(...args);
        this.author = author;
        this.genre = genre;
    }
}

class DVD extends Media {
    constructor(director, runtime, ...args) {
        super(...args);
        this.director = director;
        this.runtime = runtime;
    }
}

class CD extends Media {
    constructor(artist, numOfSongs, ...args) {
        super(...args);
        this.artist = artist;
        this.numOfSongs = numOfSongs;
    }
}

// class for methods
class System {
    constructor(catalog) {
        this.catalog = [];
    }

    addItem(...items) {
        this.catalog.push(...items); // using spread to push individual values to catalog array
    }
    removeItem(item) {
        let removedItem;
        let cat = this.catalog
        cat.forEach(function(value, index) {
            if (value.id == item) {
                removedItem = value;
                cat.splice(index, 1); // removes the item from the catalog
            }
        })
    }
    totalValue() {
        let cat = this.catalog
        let total = cat.reduce(function(accumulator, currentValue) { // reduce to find total
            let price = currentValue.value;
            return accumulator += price;
        }, 0);

        firstTotal.innerHTML = `<b>Total Value of Catalog: $${total.toFixed(2)}</b>`;
    }
    displayCatalog() {
        firstDisplay.innerHTML = "";
        this.catalog.forEach(function(value) {
            if(value instanceof Books) {
                firstDisplay.innerHTML += `<i>${value.title}</i> - $${value.value} (Author: ${value.author}, Genre: ${value.genre})<br><br>`;
            }
            else if(value instanceof DVD) {
                firstDisplay.innerHTML += `<i>${value.title}</i> - $${value.value} (Director: ${value.director}, Runtime: ${value.runtime})<br><br>`;
            }
            else if(value instanceof CD) {
                firstDisplay.innerHTML += `<i>${value.title}</i> - $${value.value} (Artist: ${value.artist}, Number of Songs: ${value.numOfSongs})<br><br>`;
            }
            else{}
        })
        this.totalValue();
    }
}

// 3 items
let Percy_Jackson_Lightning_Theif = new Books(
    "Rick Riordan", 
    "Fantasy", 
    11, 
    "The Lightning Thief", 
    2005,
    9.99);
let UHF = new DVD(
    "Jay Levey",
    97,
    21,
    "UHF",
    1989,
    14.99
);
let The_Bends = new CD(
    "Radiohead",
    12,
    31,
    "The Bends",
    1995,
    19.99
);

let system = new System(); // creating an instance of system

system.addItem(Percy_Jackson_Lightning_Theif, UHF, The_Bends); // adding the three items
system.displayCatalog();
system.totalValue();
system.removeItem(21); // removed the movie UHF

// display the Updated Catalog Items
function displayUpdated() {
    secondDisplay.innerHTML = "";
    system.catalog.forEach(function(value) {
        if(value instanceof Books) {
            secondDisplay.innerHTML += `<i>${value.title}</i> - $${value.value} (Author: ${value.author}, Genre: ${value.genre})<br><br>`;
        }
        else if(value instanceof DVD) {
            secondDisplay.innerHTML += `<i>${value.title}</i> - $${value.value} (Director: ${value.director}, Runtime: ${value.runtime})<br><br>`;
        }
        else if(value instanceof CD) {
            secondDisplay.innerHTML += `<i>${value.title}</i> - $${value.value} (Artist: ${value.artist}, Number of Songs: ${value.numOfSongs})<br><br>`;
        }
        else{}
    })

    let cat = system.catalog;
    let total = cat.reduce(function(accumulator, currentValue) { // reduce to find total
        let price = currentValue.value;
        return accumulator += price;
    }, 0);

    secondTotal.innerHTML = `<b>Total Value of Catalog: $${total.toFixed(2)}</b>`;
}

displayUpdated();