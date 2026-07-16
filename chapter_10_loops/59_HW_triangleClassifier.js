/*
Write a program that classifies a triangle based on its side lengths. Given three input values representing 
the lengths of the sides, determine if the triangle is : 
equilateral (all sides are equal), 
isosceles (exactly two sides are equal), or 
scalene (no sides are equal). 
Use an if-else statement to classify the triangle.
*/


let lengthSide1 = 10;
let lengthSide2 = 20;
let lengthSide3 = 20;
let typeOfTriangle;

if (lengthSide1 === lengthSide2 && lengthSide2 === lengthSide3 && lengthSide1 === lengthSide3) {
    typeOfTriangle = "equilateral";
} else if (lengthSide1 === lengthSide2 || lengthSide2 === lengthSide3 || lengthSide1 === lengthSide3) {
    typeOfTriangle = "isosceles";
} else if (lengthSide1 != lengthSide2 && lengthSide2 != lengthSide3 && lengthSide1 != lengthSide3) {
    typeOfTriangle = "scalene"
}

console.log("Triangle is :", typeOfTriangle);
