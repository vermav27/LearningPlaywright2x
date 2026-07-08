var v = 10;
let l = 20;
const c = 3.14;

var browser = "chrome";
var browser = "firefox"; //redeclaration and reassignment
browser = "edge"; //reassignment

//-------------------Example block-----------
var testCases = ["login", "logout", "signup"];
for (var i = 0; i < testCases.length; i++) {
    console.log(testCases[i]);
}

console.log("Number of test run = " + i); //its a leak
//-------------------------------------------

/* 
In the above example block var i is accessible outside the 
for loop and no other programming language other than javascript allows that.
which is also not good. so we avoid the use of var in automation.
*/

// function look like this

function say() {
    console.log("Hi From function");
}

say();
say();