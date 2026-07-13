//Example 1
let vineet = 18;
let willVineetGoGoa = vineet >=  18 ? "He will go." : "He will not go.";
console.log("Will vineet go goa ? : ",willVineetGoGoa);

//Example 2
let expectedStatusCode = 200;
let actualStatusCode = 200;
testResult = expectedStatusCode === actualStatusCode ? "--PASS-- " : " XX FAIL XX ";
console.log(testResult);

// Nested Ternary
let age = 20;
let decision =  age > 18 ? age > 26 ? "He can go to goa & can drink" : "He can go to goa but can't drink" : "He cannot go to goa";
console.log(decision);