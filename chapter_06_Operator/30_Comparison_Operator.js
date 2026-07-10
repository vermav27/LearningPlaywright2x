//Comparison Operator
// < , > , >= , <= , == , === , ! , != , !===

// =    ---->   Assignment operator
// ==   ---->   Loose Comparison
// ===  ---->   Strict Comparison 

console.log(3 < 4);
console.log(3 > 4);
console.log(3 >= 4); //( OR gate in this as (3>4) OR (3=4))
console.log(3 <= 4); //( OR gate in this as (3<4) OR (3=4))


console.log(42 == "42"); // loose comparison //   ---> TRUE  //Checking only the value
console.log(42 === "42"); // Strict comparison // ---> FALSE //Checking both value and the type

console.log(0 == ""); // empty string is converted to 0 // TRUE
console.log(0 === ""); // empty string is converted to 0 // False

// Exception
console.log("0" == ""); // Transitivity broken - Exception

console.log(false == 0); // True
console.log(false === 0); // False
console.log(null == 0); // False
console.log(null == undefined); // True
console.log(null === undefined); // False
console.log(0 == undefined); // False
console.log(0 === undefined); // False