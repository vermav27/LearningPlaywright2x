function greetTester(name, callback) {
    console.log("Hi, " + name);
    callback();
}

greetTester("vineet", function () {
    console.log("Lets start testing");
});

// Callback with parameter

function calculation(x, y, callback) {
    console.log(`We have numbers ${x} & ${y}`);
    let sum = x + y; // 8
    let sub = x - y; // 2
    callback(sum, sub);
}

calculation(5, 3, function (sumx, subx) {

    console.log("Lets start testing");
    console.log(sumx + subx); // 8+2 = 10

});

// -------
// sync callback
let Bugs = ["Ui issue", "Login button not working", "Stock check inconsistancy"];

Bugs.forEach(function (Bugval, index) {
    console.log(`Bug # ${index + 1} = ${Bugval}`);
})

console.log(`Total Bugs = ${Bugs.length}`);