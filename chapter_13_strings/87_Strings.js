//single quotes
let a = 'hello';

//double quotes 
let b = "Hello";

// backtick
let seconds = 539;
let durationMSG = `Test completed in ${seconds} ms`;
console.log(durationMSG);

// Multiline backtick
let testname = "Login Test";
let status = "Fail";
let duration = 449;


let report = `
Testname : ${testname}
Status : ${status}
Duration : ${duration} ms
`;
console.log(report);

// Conversion to string
let number = 200;
console.log(typeof number);
console.log(typeof String(number)); // "String keyword converts number to string";

console.log(String(true));
console.log(String(null));
console.log(String([1, 4, 2]));

//String --> Its an interface to convert to string
//string --> This is a datatype