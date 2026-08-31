class playwright2x {
    static name = "Playwright 2X";
    static mentorName = "Pramod Dutta";
    nameOfStudent;
    age;
    phoneNo;

    constructor(names, ages, contact) {
        this.age = ages;
        this.nameOfStudent = names;
        this.phoneNo = contact;
    }
}

const s1 = new playwright2x("Vineet", 32, 98789876);
const s2 = new playwright2x("Pankaj", 30, 98234876);

console.log(s1.nameOfStudent);
console.log(s2.nameOfStudent);
console.log(playwright2x.name); // Static values will always be same for all object and 
// non static values will be different to all object value.