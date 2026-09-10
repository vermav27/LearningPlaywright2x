class BaseTest {
    setup() {
        console.log("Base : Open Browser.");
    }
}

class APITest extends BaseTest {
    setup() {
        console.log("APITEST : Open Browser.");
    }
}

const api = new APITest();
api.setup();

// Polymorphism : Method Overridding --> if setup function is present in the child class then setup function from 
// child class will be called. If not present in child class then setup function will be called from the parent class.