# Abstract Class vs Interface

## Simple Difference

| Aspect | Abstract Class | Interface |
|---|---|---|
| Purpose | Shares common code | Defines class rules |
| Implementation | Can have method code | Only method structure |
| Keyword | Child uses `extends` | Class uses `implements` |
| Inheritance | One abstract class | Multiple interfaces |
| Constructor | Can have constructor | No constructor |
| State | Can store data | No real data |
| Access modifiers | Supports access modifiers | Mostly public contract |
| Best use | Common base behavior | Common shape/contract |

## Abstract Class

An abstract class is used when child classes share some common code.

```ts
abstract class BaseTest {
    browserName: string;

    constructor(browserName: string) {
        this.browserName = browserName;
    }

    openBrowser(): void {
        console.log("Opening " + this.browserName);
    }

    abstract runTest(): void;
}

class LoginTest extends BaseTest {
    runTest(): void {
        console.log("Running login test");
    }
}
```

Here, `openBrowser()` already has code, but `runTest()` must be created by the child class.

## Interface

An interface is used when a class must follow a structure.

```ts
interface TestCase {
    testName: string;
    runTest(): void;
}

class DashboardTest implements TestCase {
    testName: string = "Dashboard Test";

    runTest(): void {
        console.log("Running dashboard test");
    }
}
```

Here, the class must provide `testName` and `runTest()`.

## Easy Rule

Use an abstract class when you want to share common code.

Use an interface when you only want to define rules/structure.
