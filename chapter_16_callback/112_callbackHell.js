// Open browser
// goToLoginPage
// enterCredentials
// clickLogin

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

//---------------
openBrowser(function () {
    goToLoginPage(function () {
        enterCredential(function () {
            clickLogin(function () {
                console.log("Test Complete");
            })
        })
    })
})