function runWithLogin(testFunc, testName) {
    console.log(`Hi Starting Test : ${testName}`);
    let result = testFunc();
    console.log(`Test--> ${testName} is ${result}`);
    return result;
}

function loginPAss() {
    return "PASS";
}

function loginFail() {
    return "FAIL";
}

let output = runWithLogin(loginPAss, "LoginwithDash");
console.log(output);

let output2 = runWithLogin(loginFail, "LoginwithUser");
console.log(output2);

