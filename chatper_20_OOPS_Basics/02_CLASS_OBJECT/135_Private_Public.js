class login {

    user; // public variable
    #apiKey; // private variable - Not allowed outside the class

    constructor(username, secret) {
        this.user = username;
        this.#apiKey = secret;
    }

    display() {
        console.log("Bearer " + this.#apiKey);
    }

}

let credential = new login("tesla", "dsdfefwf4r34rwfewfsdfsdffsdskjdfsdfhsdfusdnsudfsufd");
console.log("User --> " + credential.user); // able to access public variable
console.log("User --> " + credential.apiKey); // unable to access private variable directly
