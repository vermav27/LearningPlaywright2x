let checkAuthentication = Promise.resolve("Auth Done.");
let checkDBconnection = Promise.resolve("DB check done");
let checkCredentials = Promise.resolve("Credential Check Done.")

//When all promises resolved then it will execute.
Promise.all([checkAuthentication, checkDBconnection, checkCredentials]).then(function (result) {
    console.log("All check Done.");
    console.log(result);
}).catch(function (msg) {
    console.log(msg);
})