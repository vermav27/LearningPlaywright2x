class Car {
    //CAB

    //Constructor
    constructor(name_given_during_obj_creation) {
        this.name = name_given_during_obj_creation;
    }

    //Attribute


    //Behaviour
    drive() {
        console.log(this.name + " <--- This is what i am driving.");
    }


}

const car_obj = new Car("Model S");
console.log(car_obj.name);
car_obj.drive();