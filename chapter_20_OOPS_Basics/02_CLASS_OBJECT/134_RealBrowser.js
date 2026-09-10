class Testcase {
    //CAB

    //constructor
    constructor(tc_name, tc_status, tc_priority) {
        this.name = tc_name;
        this.status = tc_status;
        this.priority = tc_priority;
    }

    //attribute
    name;
    status;
    priority;

    //behaviour
    display() {
        console.log(this.name + " --> " + this.status + " --> " + this.priority);
    }

}

let loginTest = new Testcase("login", "pass", "p0");
let dashboardTest = new Testcase("dashboard", "fail", "p3");

loginTest.display();
dashboardTest.display();

function f1() {
    console.log("Hello world");
}

// function vs method
// method is a function which is inside a class.
// function are those function which are outside a class

