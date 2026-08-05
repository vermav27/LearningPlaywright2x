function printMSG() {
    console.log("Hi How are you ?");
}

function placeOrder(item, callback) {
    console.log(`Hi ! Your order of ${item} is placed. Wait for the item to be ready....`);
    callback();
}

// First Method 
placeOrder("Burger", printMSG);

// Second Method
placeOrder("Momos", function () {
    console.log("Hi This is second method.");
});

// Third Method
placeOrder("HoneyChilliPotatoes", () => {
    console.log("Order ready");
});