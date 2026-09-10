class person {

    constructor() {
        console.log("I will be created whenevr the object is created !");
    }

    // Attribute
    name;
    email;
    salary;
    address;

    //behaviour
    eat() { }
    sleep() { }
    walk() { }
}

const obj_person = new person();

// Here obj_person is object reference
// new person() is the object