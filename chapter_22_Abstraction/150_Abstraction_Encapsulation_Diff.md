# Abstraction vs Encapsulation

## Simple Difference

| Encapsulation | Abstraction |
|---|---|
| Hides data | Hides details |
| Protects variables | Shows essentials |
| Uses private fields | Uses simple methods |
| Controls access | Reduces complexity |

## Encapsulation Example

Encapsulation protects data by keeping it private and allowing access through methods.

```js
class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    showBalance() {
        console.log(this.#balance);
    }
}

const account = new BankAccount(5000);
account.showBalance();
// console.log(account.#balance); // Error: private field
```

Here, `#balance` is hidden from outside access.

## Abstraction Example

Abstraction hides internal steps and shows only what the user needs.

```js
class Car {
    start() {
        this.#checkFuel();
        this.#startEngine();
        console.log("Car started");
    }

    #checkFuel() {
        console.log("Fuel checked");
    }

    #startEngine() {
        console.log("Engine started");
    }
}

const car = new Car();
car.start();
```

Here, the user only calls `start()`. The internal details are hidden.
