let score = [23, 45, 78, 77, 90, 43, 23];

// Map - It creates a new array on the basis of given condition.
let result = score.map(s => s > 70 ? "Pass" : "Fail");
console.log(result);

// Filter - It filers the result on the basis of array and creates the new array on the baisis of filtered result
let result1 = score.filter(x => x > 60);
console.log(result1);

// Reduce - It gives the total
let result2 = score.reduce((a, b) => a + b, 0);
console.log(result2);

// Flat - It flatens the nested array into one
let nested = [[1, 2, 3], [5, 6, [5, 7]], [7, 8]];
console.log(nested.flat());
