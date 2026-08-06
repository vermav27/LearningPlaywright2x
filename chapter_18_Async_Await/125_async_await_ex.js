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

    let t1 = await apiCall("Login");
    console.log(t1);

    let t2 = await apiCall("Dashboard");
    console.log(t2);

    let t3 = await apiCall("Execution");
    console.log(t3);

    let t4 = await apiCall("checkout");
    console.log(t4);

}

testRun();