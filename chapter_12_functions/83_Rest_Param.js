function result(suiteName, ...Results) { // Here this "...Results" contains all the paramaeter which is put in as arguments
    console.log(suiteName);
    console.log(Results); // This "Results" return the array of all the parameter passed In
}

result("Login Page", 34, 45, "Hello");
result("Dashboard", "Staging", "Vineet");

//---------------
greet("Vineet");  // This function will work 

function greet(names) {
    console.log(`Hi ${names}`)
}
//----------------
/*
calling("Vineet"); // This will not work, It will give reference error and creates TDZ - Temporal Dead zone

const calling = function (namy) {
    return `Hi ${namy}`;
}
    */
//----------------
function add(a, b, c) {
    return a + b + c;
}

let num = [1, 2, 3];
let results1 = add(...num);
console.log(results1); //6
//---------------
let responseCode = [200, 301, 400];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}

let codeResult = hasError(...responseCode);
console.log(codeResult);
//---------------
