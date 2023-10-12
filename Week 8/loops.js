/* For */

for(let i = 0; i < 5; i++) {
    console.log("For: " + i);
}

/* While */

let w = 0;
while(w < 5) {
    console.log("While: " + w);
    w++;
}

/* Do While */

let d = 10;
do {
    console.log("Do While: " + d);
    d--;
} while(d < 5);

/* For...in */

const Course = {
'cNum': 'N320',
'cTitle': 'Introduction to Vue',
'prerq': false,
'offering': ['Fall', 'Spring', 'Summer'],
'limit': 20
}

let seasons = ['Fall', 'Winter', 'Spring', 'Summer'];
let holiday = 'halloween';

for(property in Course) {
    console.log(property + ": " + Course[property]);
}

for(s in seasons) {
    console.log(s + ": " + seasons[s]);
}

for(h in holiday) {
    console.log(h + ": " + holiday[h]);
}

/* For...of */

// Doesn't work
// for(property of Course) {
//     console.log(property + ": " + Course[property]);
// }

for(s of seasons) {
    console.log(s);
}

for(h of holiday) {
    console.log(h);
}