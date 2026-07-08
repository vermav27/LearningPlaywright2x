
// Example of scope for let
let a = 10;
console.log("First : " + a);

function hello() {
    let a = 20;
    console.log("Inside function : " + a);

    if (true) {
        let a = 30;
        console.log("Inside if block : " + a);
    }

    console.log("Inside function after if block : " + a);
}

hello();
console.log("At last : " + a);