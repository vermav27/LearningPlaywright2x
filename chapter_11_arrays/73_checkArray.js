//Checking Array

let x = [1, 2, 3, 4];
let result = Array.isArray(x); // checking if provided argument is an array or not
console.log(result);

let resultOfa = Array.isArray("a"); // checking if provided argument is an array or not
console.log(resultOfa);

// Every & Some
//Every
let numbers_1 = [80, 85, 90];
let res_1 = numbers_1.every(s => s > 70); // It will check if every element in that array if greater than 70 if yes, return true
console.log(res_1);

let res_2 = numbers_1.every(s => s > 85); // It will check if every element in that array if greater than 85 if not , will return false
console.log(res_2);

//Some
let res_3 = numbers_1.some(s => s < 85); // It will check if atleast 1 element in that array if less than 85 if yes , will return true
console.log(res_3);

let res_4 = numbers_1.some(s => s < 10); // It will check if atleast 1 element in that array if less than 10 if no , will return false
console.log(res_4);