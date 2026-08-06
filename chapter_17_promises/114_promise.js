let order = new Promise(function (resolve, reject) {

    let foodReady = true;
    if (foodReady) {
        resolve("Order is completed");
    } else {
        reject("Order cancelled");
    }

});

console.log(order);