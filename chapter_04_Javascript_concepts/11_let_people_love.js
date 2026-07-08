let retryCount = 0;

retryCount = retryCount + 1; //here we can change the value of retry by reassigning
retryCount = retryCount + 1; //here we can change the value of retry by reassigning
console.log("Retrycount : " + retryCount);

//let retryCount = 50; here we cannot change the value of retry by redeclaration, Redeclaration not allowed in cae of let

//Block Scoped
let name = "vineet";

if (name === "vineet") {
    let x = 100;
    console.log(x);
}

// console.log(x); It will give me referrence error : ReferenceError: x is not defined
// x is only accessible inside the block
// thats why let is blocked scope.

//let is loyal
//var is variable
