// Music List

let genre = ["rock", "pop", "jazz", "rap", "classical"];

for (let i of genre) {
    console.log(i);
}

// Music Preference

document.getElementsByTagName('p')[1].innerHTML = "My favorite genre of music is pop.";

// Animal Function

function animal(name, attribute) {
    let paragraph = document.getElementById("animals");
    paragraph.innerHTML += "I have a " + name + "that is " + attribute + "." + "<br>"; 
}

animal("German Shepherd", "black and tan");
animal("pig", "small and pink");
animal("chicken", "brown and loud");

// Change the Color

let nameInput = document.createElement("input");
nameInput.placeholder = "What's your name?";
let element = document.getElementsByTagName('section')[3];
element.appendChild(nameInput);

let button = document.createElement("button");
button.innerHTML = "Enter";
element.appendChild(button);

let check = 0;

button.addEventListener("click", nameEntered);

function nameEntered() {
  let name = nameInput.value;
  let promp = prompt("Welcome, " + name + "! What is your favorite color?");

  document.body.style.backgroundColor = promp;
}