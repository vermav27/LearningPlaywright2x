interface execution {
    name: string;
    run(a: number): number;
    getStatus(): string;
}

class myExecution implements execution {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run(a: number): number {
        return a + 1;
    }
    getStatus(): string {
        return "PASS";
    }
}

// Remember : 
// interface always extends other interface
// but
// class always implements interface