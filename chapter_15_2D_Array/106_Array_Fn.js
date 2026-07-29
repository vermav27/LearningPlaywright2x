let scores = [
    [23, 45, 99],
    [54, 67, 77],
    [40, 45, 42]
];

let rowSum = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log(rowSum);

//List out the test which are failed.
let suiteResults = [

    ["login-pass", "register-pass", "logout-fail"],
    ["search-pass", "filter-fail", "sort-pass"],
    ["checkout-fail", "payment-fail", "confirm-pass"]

];

let failedTest = [];
for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        if ((suiteResults[i][j]).endsWith("fail")) {

            let testName = suiteResults[i][j].split("-");
            failedTest.push(testName[0]);

        }
    }
}
console.log(failedTest);