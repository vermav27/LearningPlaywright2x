// solution of callback hell problem.
async function openBrowser() {
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

async function goToLoginPage() {
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

async function enterCredentials() {
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

async function clickLoginButton() {
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

// run e2e test
async function e2eTest() {

    let msg1 = await openBrowser();
    console.log(msg1);
    let msg2 = await goToLoginPage();
    console.log(msg2);
    let msg3 = await enterCredentials();
    console.log(msg3);
    let msg4 = await clickLoginButton();
    console.log(msg4);

}

e2eTest();