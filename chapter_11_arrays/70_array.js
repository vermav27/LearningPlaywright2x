let fruits = ['banana', 'apple', 'cherry'];
fruits.sort();
console.log(fruits);

let numbers = [3, 5, 1, 2, 4, 6, 9, 3];
numbers.sort();
console.log(numbers);


let numbered = [3, 5, 10, 29, 4, 6, 9, 3];
numbered.sort();
console.log(numbered);
// Result is : 
/*
[ 10, 29, 3, 3, 4,  5, 6, 9 ]

// This is sorted lexically, means on the basis of first letter of the number.
// Javascript is taking it as a string and then doing the sorting. 

This is also known as lexographic sorting above
*/

let digits = [3, 5, 10, 29, 4, 6, 9, 3];
digits.sort((a, b) => a - b); // ascending
console.log(digits);


digits.sort((a, b) => b - a); // desscending
console.log(digits);

/*
means:
Negative result: a comes before b ( Because the result is negative, 3 comes before 5. | means sort from smallest to largest.)
Positive result: b comes before a ( Because the result is positive, 5 comes before 3. | means sort from largest to smallest.)
Zero: their order remains unchanged
*/
