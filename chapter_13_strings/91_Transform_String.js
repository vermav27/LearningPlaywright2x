let str = "  Hello World !  ";

console.log(str.toUpperCase()); // Convert string to UPPER CASE
console.log(str);
console.log(str.toLowerCase()); // convert string to lower case
console.log(str.trim()); // Remove extra spaces from the string from both start and end.
console.log(str.trimStart()); // Remove extra sspace from the string from the start.
console.log(str.trimEnd()); // Remove extra space from the string from the end.

console.log(str);

// Replace - Replace All
let msg = "This is a test which  was FAIL, and now Its gonna FAIL again and again.";
console.log(msg.replace("FAIL", "PASS")); // It will only replace the first presence
console.log(msg);

console.log(msg.replaceAll("FAIL", "PASS")); // It will only replace the all presence

// Concatenation
let x = "Hello";
let y = "worlld";

console.log(x + y);
console.log(x.concat(y));
console.log(`${x} ${y}`);

//split
let r = "pass,fail,re,suppli";
let result = r.split(",");
console.log(result);

// join
let arr = [99, 90, 89];
console.log(arr.join("-"));