// Syncronous Callback

let resultArray = ["pass", "fail", "fail", "pass", "pass"];

resultArray.forEach(function (val, idx) {
    console.log("Test ->> " + idx + " --> " + val);
})

resultArray.forEach((val, idx) => {
    console.log("Testing World ->> " + idx + " --> " + val);
})