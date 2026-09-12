interface calculation {
    add(a: number, b: number): number;
    subtract(x: number, y: number): number;
}

let addition: calculation = {
    add: (a, b) => a + b,
    subtract: (x, y) => x - y
}