class base {
    verify() {
        console.log("Verify the base page");
    }
}

class loginPage extends base {
    verify() {
        console.log("verify the login page");
    }
}

class dashPage extends base {
    verify() {
        console.log("verify the dash page");
    }
}

class footerPage extends base {
    verify() {
        console.log("verify the footer page");
    }
}

const test = [new loginPage(), new dashPage(), new footerPage()];
test.forEach(function (tests) {
    tests.verify();
})