// closure is bassically : It returns the another inner function when the outer function is called.
// Example 1
function outer() {
    let msg = "Hello";
    console.log("Outer Called");

    function inner() {
        console.log(msg);
    }
    return inner;
}

let func_inner = outer();
func_inner();

// Example 2
function makeCounter(start = 0) {
    let count = start;
    return {
        increment() { count++ },
        decrement() { count-- },
        get() { return count; }

    }
}

let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get());