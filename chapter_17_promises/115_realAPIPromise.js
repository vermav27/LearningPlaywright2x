let apiCall = new Promise(function (resolve, reject) {
    resolve({
        status: 200,
        body: "userdata"
    })
});

// .then only executes when promise is resolved successfully
apiCall.then(function (res) {
    console.log(res.status);
})

