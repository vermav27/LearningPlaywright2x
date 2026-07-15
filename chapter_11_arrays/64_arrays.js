// Creating arrays
let browsers = ["chrome", "safari", "edge"];

//Creating arrays using constructor
let score1 = new Array(3);
let score2 = new Array(1, 2, 3);

console.log(score1);
console.log(score2);

// arrays are always stored in a continuous memory.

// Way of creating array 

let scoring = new Array(3);
scoring[0] = 9;
scoring[1] = 2;
scoring[2] = 89;
console.log(scoring);

let numbers = new Array(100, 200, 300, 400);
console.log(numbers);

let marks = Array.of(20, 40, 45, 60);
console.log(marks);

let fromArray = Array.from("Vineet");
console.log(fromArray);

