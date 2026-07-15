// Access & Modify
let status = ["pass", "fail", "skip"];

console.log(status.at(1));
console.log(status.at(-2));
console.log(status.at(-4)); // This is going to be undefined

// Modify
status[1] = "blocked";
console.log(status);