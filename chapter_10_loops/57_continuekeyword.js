// continue keyword skips the current iteration and moves to the next one
// when continue is hit, the rest of the code in that iteration is skipped

for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // skip iteration when i is 2
    console.log("i =", i);
}

// Output:
// i = 0
// i = 1
// i = 3   ← i=2 was skipped
// i = 4

console.log("---");

// Practical example: print only odd numbers using continue
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue; // skip even numbers
    console.log(i, "is odd");
}