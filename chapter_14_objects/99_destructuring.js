const user = {
    name: "Vineet",
    age: 34,
    city: "Una",
    //country: "JAPAN"
};

// Destructuring
const { name, age } = user;
console.log(name);
console.log(age);

// Changing name of the keys but this donot change in the original object.
const { name: userName, age: userAge } = user;
console.log(userName);
console.log(userAge);

console.log(user);

// Default Value
const { country = "INDIA" } = user; // It means that if country exist in the object then give me that value else give me value INDIA
console.log(country);
console.log(user);