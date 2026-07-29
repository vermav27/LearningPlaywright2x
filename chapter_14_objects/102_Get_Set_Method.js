// This is not gonna used in playwright

const user = {
    firstName: "Vineet",
    lastName: "Verma",
    get fullName() {
        return this.firstName + this.lastName;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    }
}

console.log(user.fullName); 