let num = [1, 2, 3, 4, 5]

console.log(num.slice(1, 3)); // [2,3]

// Syntax = slice(start,end) but it actual means slice(start,end-1)

console.log(num.slice(2)); //[3,4,5]

console.log(num.slice(-2)); //[4,5]