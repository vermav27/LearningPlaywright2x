let user = {

    name: "ankita",
    age: 34,
    sex: "F",
    place: "Delhi"

};

// Dynamic Access
const key = "place";
console.log(user[key]);

// Adding & Modifying element
user.maritalStatus = "Married";
user.place = "Bikaner";

console.log(user);