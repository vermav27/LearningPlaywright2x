let x = "global";

if (true) {

    // console.log(x);
    // This is temporal dead zone. because let is always blocked scope.
    // And in this area x is not yet declared.

    let x = "block";
    console.log(x);
}

console.log(x);