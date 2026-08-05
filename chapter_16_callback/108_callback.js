// 1st Method to call -- We donot use that in playwright
function cafe(item, callYouWhenTableIsReady) {
    console.log("finding a table...1");
    console.log("Still Finding....");
    console.log("Still Finding....");
    console.log(`Hi you item is in progres... ${item}`);
    callYouWhenTableIsReady();
}

function callYouWhenTableIsReady() {
    console.log("Call the person......9898097867");
}

// 2nd Method to call
cafe("burger", callYouWhenTableIsReady);

// 3rd Methodto call
cafe("Pizza", () => {
    console.log("calling on ... 9810739879");
});

