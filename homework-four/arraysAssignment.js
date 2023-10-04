const students = [

    { name: 'Alice', grades: [85, 92, 78, 90] },
   
    { name: 'Bob', grades: [75, 88, 95, 100] },
   
    { name: 'Charlie', grades: [60, 72, 68, 74] },
   
    { name: 'David', grades: [92, 88, 95, 98] },
   
    { name: 'Eve', grades: [100, 100, 100, 100] }
   
];

// getting HTML elements
let studentList = document.getElementsByClassName('sList')[0];
let passed = document.getElementsByTagName('p')[1];
let perfect = document.getElementsByTagName('p')[2];
let topStudentList = document.getElementsByClassName('sList')[1];
let averageStudentList = document.getElementById('studentAvgs');
let totalGrades = document.getElementsByTagName('p')[5];

// function to reuse when needing to calculate average
let calcAvg = (value) => {
    let average = 0;
    value['grades'].forEach(function(value2) { // looping through each element of each grade array
        average += value2 / value['grades'].length; // calculating average
    });
    return average;
}

// forEach method to display the name of each student
students.forEach(function(value) {
    studentList.innerHTML += value['name'] + " ";
})

// every method to check if all students have passed the class
let allPassed = students.every(function(value) {
    return calcAvg(value) >= 60;
})

passed.innerHTML += allPassed; // displaying result

// some method to check if at least one student has achieved a perfect score
let anyPerfect = students.some(function(value) {
    return calcAvg(value) === 100;
})

perfect.innerHTML += anyPerfect; // displaying result

// filter method to create the result of all the students with the average grade of 90 or higher
let averageAbove90 = students.filter(function(value) {
    return calcAvg(value) >= 90;
})

averageAbove90.forEach(function(value) { // displaying results
    topStudentList.innerHTML += value['name'] + ' ';
})

// map method that will create a new array and format the data
let studentSummaries = students.map(function(value) {
    return {'Name': value['name'], 'Average Grade': calcAvg(value)};
})

studentSummaries.forEach(function(value) { // displaying results
    let li = document.createElement('li'); // creating a list item to put data in
    li.innerHTML = "Name: " + value['Name'] + ", " + "Average Grade: " + value['Average Grade'].toFixed(2);
    averageStudentList.appendChild(li); // appending the list item to the unordered list as a child
})

// reduce method to calculate the total number of grades across all students
let total = students.reduce(function(accumulator, nextValue) {
    return accumulator + nextValue['grades'].length;
}, 0);

totalGrades.innerHTML += total; // displaying result