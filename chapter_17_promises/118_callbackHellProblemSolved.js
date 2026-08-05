// Open browser
// goToLoginPage
// enterCredentials
// clickLogin
/*
function openBrowser(callback) {
    console.log("Step 1 : Open Browser");
    setTimeout(function () {
        callback();
    }, 2000);
}

function goToLoginPage(callback) {
    setTimeout(function () {
        console.log("Step 2 : Login page Loaded");
        callback();
    }, 2000);
}

function enterCredential(callback) {
    setTimeout(function () {
        console.log("Step 3 : Entered Credential");
        callback();
    }, 2000);
}

function clickLogin(callback) {
    setTimeout(function () {
        console.log("Step4 : Clicking Login.");
        callback();
    }, 2000);
}

//-------THE PROBLEM--------
openBrowser(function () {
    goToLoginPage(function () {
        enterCredential(function () {
            clickLogin(function () {
                console.log("Test Complete");
            })
        })
    })
})
*/

// solution of callback hell problem.
function openBrowser() {
    return new Promise(function (resolve, reject) {
        console.log("Opening Browser.....");
        let openingBrowser = true;
        if (openingBrowser) {
            resolve("Browser Opened");
        } else {
            reject("Issue Opening Browser");
        }
    })
}

function goToLoginPage() {
    return new Promise(function (resolve, reject) {
        console.log("Login Page Opening.....");
        let loginPage = true;
        if (loginPage) {
            resolve("Login Page Opened");
        } else {
            reject("Issue Opening Login Page");
        }
    })
}
function enterCredentials() {
    return new Promise(function (resolve, reject) {
        console.log("entering Credentials.....");
        let enterCreds = true;
        if (enterCreds) {
            resolve("Entered Creds");
        } else {
            reject("Issue Oentering creds");
        }
    })
}

function clickLoginButton() {
    return new Promise(function (resolve, reject) {
        console.log("Clicking Login button.....");
        let clickLogin = true;
        if (clickLogin) {
            resolve("Clicked Login");
        } else {
            reject("Issue clicking loginbtn");
        }
    });
}

openBrowser().then(function (msg) {
    console.log("Browser successfully Opened");
    return goToLoginPage();
}).then(function (msg) {
    console.log(msg);
    return enterCredentials();
}).then(function (msg) {
    return clickLoginButton();
}).catch(function (msg) {
    console.log("Erroe Occured !");
}).finally(function () {
    console.log("Text case execution completed.");
})