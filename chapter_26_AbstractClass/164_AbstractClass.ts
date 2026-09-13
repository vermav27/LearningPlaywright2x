abstract class BaseTest {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract setup(): void;
    abstract teardown(): void;
    abstract tearup(): void;

    settingConfig(): void {
        console.log("Setting up the configurations");
    }
}

class UI extends BaseTest {
    setup(): void {
        console.log("This is setup.");
    }

    teardown(): void {
        console.log("This is teardown.");
    }

    tearup(): void {
        console.log("This is tearup.");
    }
}

let user1 = new UI("a");
user1.setup();
user1.teardown();
user1.tearup();
user1.settingConfig();