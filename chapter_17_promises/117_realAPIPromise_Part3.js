let apiCall = new Promise(function (resolve, reject) {
    reject({
        status: 500,
        body: "error fetching data"
    })
});

// .finally executes when promise is rejected or resolved, It will run every time.
apiCall.then(function (res) {
    console.log(res.status);
}).catch(function (res) {
    console.log(res.body);
}).finally(function () {
    console.log("Concluding test.....");
})