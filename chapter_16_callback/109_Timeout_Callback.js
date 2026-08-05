console.log("Test Started...");

setTimeout(function () {
    console.log("Test ran successfully");
}, 5000);

console.log("Moving to next Test");

// As javascript is async in nature thats why output is like this
// Test Started...
// Moving to next Test
// Test ran successfully