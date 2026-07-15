// break keyword terminates the loop entirely when encountered
// unlike continue which only skips the current iteration

for (let i = 0; i < 10; i++) {
    if (i === 4) break; // stop the loop when i reaches 4
    console.log("i =", i);
}

// Output:
// i = 0
// i = 1
// i = 2
// i = 3
// (loop exits before i=4 is printed)

console.log("---");

// Practical example: find first number divisible by 7
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        console.log("First number divisible by 7 is:", i);
        break; // exit once found — no need to check further
    }
}

console.log("---");

// break exits the entire loop (not just the current iteration)
// compare with continue which only skips one iteration
