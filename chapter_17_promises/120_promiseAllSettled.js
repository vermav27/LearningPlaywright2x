let checkAuthentication = Promise.resolve("Auth Done.");
let checkDBconnection = Promise.reject("DB check fail");
let checkCredentials = Promise.resolve("Credential Check Done.")

//When all promises settled either resolved or rejected then it will execute. Its a way of consolidating.
Promise.allSettled([checkAuthentication, checkDBconnection, checkCredentials]).then(function (result) {
    console.log("All check Performed.");
    console.log(result);
})