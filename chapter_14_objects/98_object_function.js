// Object can also have function in it.

let calculator = {
    value: 0,
    addition(a, b) {
        return a + b;
    },
    subtraction(a, b) {
        return a - b;
    }
}

let x = 10;
let y = 4;

console.log(calculator.addition(x, y));
console.log(calculator.subtraction(x, y));