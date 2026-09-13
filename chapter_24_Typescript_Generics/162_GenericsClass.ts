class ArrayManipulation<T> {

    private items: T[] = [];

    addItem(item: T): void {

        this.items.push(item);

    }

    getItem(num: number): T {

        return this.items[num] as T;
    }

    getAllItem(): T[] {

        return this.items;

    }

    counts(): number {

        return this.items.length;

    }

}

let arr1 = new ArrayManipulation<number>();
let arr2 = new ArrayManipulation<string>();

arr1.addItem(200);
arr1.addItem(300);
arr1.addItem(400);
arr1.addItem(500);

console.log(arr1.counts());
console.log(arr1.getItem(2));
console.log(arr1.getAllItem);

arr2.addItem("Login");
arr2.addItem("Dashboard");

console.log(arr2.counts());
console.log(arr2.getItem(1));

// Explanation
/*
Generic class means a class that can work with different data types
without creating separate classes for each type.

Here, ArrayManipulation<T> uses T as a type variable.
T is a placeholder for the real type that we pass while creating the object.

In this class:
- private items: T[] means items is an array of the selected type.
- addItem(item: T) means only the selected type can be added.
- getItem(num: number): T means it returns one value of the selected type.
- getAllItem(): T[] means it returns the full array of the selected type.

When we create:
let arr1 = new ArrayManipulation<number>();

T becomes number for arr1.
So arr1 can store only numbers like 200, 300, 400.

When we create:
let arr2 = new ArrayManipulation<string>();

T becomes string for arr2.
So arr2 can store only strings like "Login" and "Dashboard".

This makes the class reusable and type-safe.
*/
