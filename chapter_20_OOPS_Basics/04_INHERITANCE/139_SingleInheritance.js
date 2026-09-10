class Animal {

    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating.");
    }

    sleep() {
        console.log(this.name + " is sleeping.");
    }


}

class Dog extends Animal {

    constructor(name, breed) {
        super(name); // here super keyword is calling the constructor of parent class.
        this.breed = breed;
    }

    bark() {
        console.log(this.name + " is barking.");
    }
}

const dog1 = new Dog("Kesar", "German Shephard");
dog1.eat();
dog1.sleep();
dog1.bark();