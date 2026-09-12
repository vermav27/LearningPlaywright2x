interface baseClass {
    readonly url: string;
    readonly token: string;
}

interface login extends baseClass {
    readonly userName: string;
    readonly password: string;
}

interface dashboard extends baseClass {
    readonly description: string;
    readonly submitButton: string;
}

let test1: login = {
    url: "www.google.com",
    token: "324u34234h234923y49237h4u23g4jh2g43yftr42gf3d4f283",
    userName: "vverma",
    password: "hello12345",
}

// so here variable test 1 have to include all the variables from both baseClass and login class
// as a part of interface concept