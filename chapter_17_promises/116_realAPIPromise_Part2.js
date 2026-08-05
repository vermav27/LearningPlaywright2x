let apiCall = new Promise(function (resolve, reject) {
    reject({
        status: 500,
        body: "error fetching data"
    })
});

// .catch only executes when promise is rejected
apiCall.then(function (res) {
    console.log(res.status);
}).catch(function (res) {
    console.log(res.body);
})