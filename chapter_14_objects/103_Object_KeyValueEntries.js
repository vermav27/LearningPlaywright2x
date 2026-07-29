const obj = {
    a: 1,
    b: 3,
    c: 6
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const user = {
    name: "Vineet",
    place: "Delhi",
    animal: "Dog",
    thing: "iPhone"
};

for (let key in user) {
    console.log(`${key} --> ${user[key]}`);
}