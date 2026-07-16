let names = ["vihan", "vineet", "Anil", "Saroj", "Vineet"];

let result1 = names.indexOf("vineet"); // Returns first index of presence
console.log("Index of vineet", result1);

let result2 = names.indexOf("shreya"); // If not exist it will give -1
console.log("Index of shreya", result2);

let result3 = names.lastIndexOf("Vineet"); // Returns last index of presence
console.log("Last index of vineet", result3);

let result4 = names.includes("Mohit"); // Return false if not present
console.log("Presence of mohit : ", result4);

let result5 = names.includes("Vineet"); // Return false if not present
console.log("Presence of Vineet : ", result5);

let x = [2, 4, 6, 8];
console.log(x.find(y => y > 4)); // Returns the first result on the basis of condition provided in find function
//Result will be 6

let z = [2, 4, 6, 8];
console.log(z.findIndex(a => a > 4)); // Returns the index of the first presence of number according to condition
// Result will be 2  


let p = [2, 4, 6, 8];
console.log(p.findLast(q => q > 4)); // Returns the first result from the last on the basis of condition provided in find function
//Result will be 8

let l = [2, 4, 6, 8];
console.log(l.findLastIndex(m => m > 4)); // Returns the index of the first presence of number from the last according to condition
// Result will be 3  