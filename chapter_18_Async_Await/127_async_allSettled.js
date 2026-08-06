function apiCall(callFor) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve({
                callFor: `${callFor}`,
                status: "200 OK"
            });
        }, 3000)
    })
}

async function testRun() {

    let [r1, r2, r3] = await Promise.allSettled([
        apiCall("Login..."),
        apiCall("Execution...."),
        apiCall("Dashboard...")
    ])

    console.log(r1);
    console.log(r2);
    console.log(r3);

}

testRun();