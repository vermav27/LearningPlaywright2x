let names = ["Vineet", "Bhushan", "Mohit", "Nitesh", "Anuj"];

// Iteration from 1st to last
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log("-------")

// Using "of"
for (x of names) {
    console.log(x);
}

console.log("-------")

// Using for each with index
names.forEach((n, i) => {
    console.log(n, i);
})

console.log("-------")

// Using in
for (let n in names) {
    console.log(names[n]);
}
console.log("-------")