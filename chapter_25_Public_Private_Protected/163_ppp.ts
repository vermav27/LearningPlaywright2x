class APIConfig {

    public baseUrl: string;
    private token: string;
    protected timeout: number;

    constructor(base: string, tok: string, time: number) {
        this.baseUrl = base;
        this.token = tok;
        this.timeout = time;
    }

    private apiAccess(): string {
        return "Bearer " + this.token;
    }

    public SendRequest(path: string): void {
        console.log("GET " + this.baseUrl + path);
        console.log("Auth: " + this.apiAccess());
        console.log("Timeout : " + this.timeout + " ms");
    }

}

class UserAPIConfig extends APIConfig {

    getDetails(): void {
        console.log("Time Out : " + this.timeout); // This is accessible outside the class as this is protected and protected can be accessible in class and child class.
        console.log("Base URL : " + this.baseUrl); // This is accessible as its a public
        // console.log("Token : " + this.apiAccess()); This is not accessible in child class as its a private method.
    }

}

let user1: APIConfig = new APIConfig("www.google.com", "34jh5g34h5jg353", 25);
user1.SendRequest("/search?");

let user2: UserAPIConfig = new UserAPIConfig("www.google.com", "34jh5g34h5jg352", 35);
user2.getDetails();
user2.SendRequest("/users");
console.log("Public Base URL from user2 : " + user2.baseUrl);