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