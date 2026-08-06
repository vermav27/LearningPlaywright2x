async function getResult() {
    let x = 10;
    let y = 20;
    let sum = x + y;
    return sum;
}

getResult().then(function (res) {
    console.log(res);
});