function calling(a: string): string {
    return "Vineet";
}

const x: string = calling("Vishal");
console.log(x);

/* 
We cannot use : calling(123);
*/

// This is a generic function
function getValue<T>(result: T[]) {
    return result[0]!;
}
const value = getValue<number>([200, 300, 400]);
console.log(value);

/*
GENERICS EXPLANATION
Generic function means a function that can work with different data types
without writing the same function again and again.

Here, <T> is a type variable.
It works like a placeholder for the real type.

In getValue<T>(result: T[]):
- T[] means the function accepts an array of any one type.
- result[0] returns the first value from that same type.

When we call getValue<number>([200, 300, 400]):
- T becomes number.
- result becomes number[].
- return value also becomes number.

So generics help us create reusable and type-safe functions.
*/
