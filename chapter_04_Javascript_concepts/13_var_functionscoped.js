
// Example of function scoped for var
var a = 10;
console.log("First : " + a);

function hello() {
    var a = 20;
    console.log("Inside function : " + a);

    if (true) {
        var a = 30;
        console.log("Inside if block : " + a);
    }

    console.log("Inside function after if block : " + a);
}

hello();
console.log("at last : " + a);