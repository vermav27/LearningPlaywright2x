// String Conversion

// Number to String
let x = (200).toString(); // Coverted to string "200"
let y = true.toString(); // converted to string "true"

// String to Number
let z = Number("42"); // Converted to number
let a = parseInt("42px"); // 42 
let b = parseFloat("32.23"); // 32.23

console.log(x);
console.log(y);
console.log(z);
console.log(a);
console.log(b);

// Number() — converts string to number
let p = Number("123"); // 123
let q = Number(""); // 0
let r = Number("abc"); // NaN

console.log(p);
console.log(q);
console.log(r);
