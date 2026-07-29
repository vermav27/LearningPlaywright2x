let details = {
    name: "Vineet",
    age: 42,
    city: "Delhi",
    job: "Software Engineer"
};

// Here this "details" keyword itself is a object reference.

//Access element
console.log(details.age);
console.log(details["city"]);

let yourDetail = details;
console.log(yourDetail.name);

yourDetail.name = "Bhushan"; // It will change the value of the name in both the references "details" and "yourDetail".

console.log(details.name);
console.log(yourDetail.name);