class bank {

    //CAB

    //Constructor
    constructor(bal) {
        this.#balance = bal;
    }
    //Attribute
    #balance;

    //Behaviour
    display() {
        if (this.#balance < 1000) {
            console.log("Low Balance !");
        } else {
            console.log("Balance is ---> " + this.#balance);
        }
    }

}

let myBal = new bank(10000);
console.log(myBal.balance); // Cannot directly access
myBal.display(); // Cann only access using method