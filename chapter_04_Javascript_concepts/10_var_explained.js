var a = 10;  //global scope
console.log(a);

function printhello() {
    console.log("Hello guys !");
    var a = 20; // local scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a);
    }
}

printhello();
var a = 40;
console.log(a);

// So the problem here is with var , it can be changed as many number of times.