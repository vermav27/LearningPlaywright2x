let arr = [2, 3, 4, 5, 6];
console.log(arr);

// Add to end - push
arr.push(90);
console.log(arr);

// Remove from end - pop
arr.pop();
console.log(arr);

// Adding multiple elements - push
arr.push(56, "hello");
console.log(arr);

//Adding at begining
arr.unshift(21); //It add the value at the start of array, It donot removes the first value
console.log(arr);

//Removing from the beginning
arr.shift();
console.log(arr);

//Array ->> [ 2, 3, 4, 5, 6, 56, 'hello' ]
//Index ->>   0. 1  2. 3. 4. 5.     6

//Remove element from array and insert a new element at that place 
arr.splice(2, 3, "vineet"); // It means remove the element starting from  the index 2 and from that remove 3 elements and add "vineet" in place of that.
console.log(arr);
// [ 2, 3, 'vineet', 56, 'hello' ]
//   0. 1.     2.    3.     4

//Remove element from array 
arr.splice(2, 1); // It means remove the element starting from  the index 2 and from that remove 1 element.
console.log(arr);
// [ 2, 3, 56, 'hello' ]

//Donot Remove element from array but add at a particular place
arr.splice(2, 0, 1); // It means it will not remove the element starting from index 2 and add 1 at that place.
console.log(arr);
// [ 2, 3, 1, 56, 'hello' ]

//Remove element from array and insert new elements at that place 
arr.splice(1, 2, "vineet", 78); // It means remove the element starting from  the index 1 and from that remove 2 elements and add "vineet" & 78 in place of that.
console.log(arr);
//[ 2, "vineet", 78, 56, 'hello' ]

