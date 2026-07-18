let x = [1, 2, 3, 4];
let y = [9, 8, 7, 6];

// Concat function
let c = x.concat(y);
console.log(c);

// Spread concatenation 
let d = [...x, ...y];
console.log(d); // [1,2,3,4,9,8,7,6]

// Join function
let e = x.join("|"); // It joins all the elements of array using any seperator whih we pass as a string.
console.log(e);

let f = x.join("-"); // It joins all the elements of array using any seperator whih we pass as a string.
console.log(f);