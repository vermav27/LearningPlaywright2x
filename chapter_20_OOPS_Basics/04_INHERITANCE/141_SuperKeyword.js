class base {

    setup() {
        console.log("This is base setup.");
    }

    teardown() {
        console.log("This is base teardown.");
    }

}

class lowerBase extends base {

    setup() {
        super.setup();
        console.log("This is lowerbase setup.");
    }

    teardown() {
        console.log("This is base teardown.");
    }

}

const lb1 = new lowerBase();
lb1.setup();