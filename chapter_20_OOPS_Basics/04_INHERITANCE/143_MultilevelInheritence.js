class base {
    baselock() {
        console.log("Open Base lock");
    }
}
class userAuth extends base {
    userAuthLock(name) {
        this.name = name;
        console.log("Open user Auth lock" + this.name);
    }
}
class login extends userAuth {
    loginLock() {
        console.log("Open login lock");
    }
}

const user1 = new login();
user1.baselock();
user1.userAuthLock("Tello");
user1.loginLock();