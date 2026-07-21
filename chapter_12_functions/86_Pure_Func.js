// This is a pure function where it has no side effects and input is predictable
function calculateAdd(a, b) {
    return a + b;
}
let x = 5;
let y = 10;
let result = calculateAdd(x, y);
console.log(result);

// This is impure function where result depends on external state.
function numberValid(num) {
    return Math.random >= num;
}
let digit = 10;
let prediction = numberValid(digit);
console.log(prediction);