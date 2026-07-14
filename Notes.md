# JavaScript Interview Notes

## 1. JavaScript Basics

**console.log()** — Output data to the console. The most basic debugging tool.

```js
console.log("Hello World");
```

**process** — Node.js global object providing environment info.

```js
console.log(process.platform);  // 'darwin', 'win32', 'linux'
console.log(process.arch);      // 'arm64', 'x64'
console.log(process.version);   // Node.js version
```

---

## 2. Identifiers & Naming Conventions

**Identifier rules:**
- Can contain letters, digits, `$`, and `_`
- Cannot start with a digit
- Case-sensitive (`name` ≠ `Name`)
- Spaces not allowed
- Unicode characters allowed

```js
var $ = 10;        // valid
var _ = 12;        // valid
var abc123 = 90;   // valid
var vineet_verma = "vineet";  // valid
var \u0041 = "A";  // valid (unicode)
```

**Common naming conventions:**

| Convention | Example | Use Case |
|---|---|---|
| camelCase | `firstName` | Variables, functions |
| snake_case | `first_name` | Less common in JS |
| PascalCase | `UserProfile` | Classes, constructors |
| UPPER_SNAKE_CASE | `MAX_LENGTH` | Constants |

---

## 3. Comments

```js
// Single-line comment

/*
   Multi-line
   block comment
*/
```

**Shortcuts:** `Cmd + /` (Mac), `Ctrl + /` (Windows) — toggle line comment. `Shift + Alt + A` — toggle block comment.

---

## 4. Variables: var, let, const

| Feature | var | let | const |
|---|---|---|---|
| Scope | Function-scoped | Block-scoped | Block-scoped |
| Redeclaration | ✅ Allowed | ❌ Not allowed | ❌ Not allowed |
| Reassignment | ✅ Allowed | ✅ Allowed | ❌ Not allowed |
| Hoisting | ✅ Hoisted with `undefined` | ✅ Hoisted but TDZ | ✅ Hoisted but TDZ |

**var** — Function-scoped. Accessible outside blocks (leaks). Avoid in modern code.

```js
var browser = "chrome";
var browser = "firefox"; // redeclaration allowed
browser = "edge";        // reassignment allowed

// Leaks outside block
for (var i = 0; i < 5; i++) { }
console.log(i); // 5 — i leaked!
```

**let** — Block-scoped. Redeclaration not allowed in same scope.

```js
let retryCount = 0;
retryCount = 1; // reassignment allowed
// let retryCount = 5; // ❌ SyntaxError: redeclaration

if (true) {
    let x = 100;
}
// console.log(x); // ❌ ReferenceError: x is not defined
```

**const** — Block-scoped. Must be initialized. Cannot be reassigned or redeclared.

```js
const URL = "www.google.com";
// URL = "www.yahoo.com"; // ❌ TypeError: Assignment to constant variable
```

---

## 5. Functions

**Function declaration** — Hoisted to the top.

```js
function greet() {
    console.log("Hello!");
}

greet(); // calling
```

Functions can be called multiple times, reused anywhere.

---

## 6. Hoisting & Temporal Dead Zone (TDZ)

**Hoisting** — JavaScript moves declarations to the top of their scope during compilation.

**var hoisting:**
```js
console.log(greeting); // undefined (hoisted with undefined)
var greeting = "Hello";
console.log(greeting); // "Hello"
```

**let/const hoisting (TDZ):**
```js
// console.log(score); // ❌ ReferenceError: Cannot access before initialization
let score = 100;

// Block-level TDZ
let x = "global";
if (true) {
    // console.log(x); // ❌ TDZ — x in this block shadows the outer x
    let x = "block";
    console.log(x); // "block"
}
```

**TDZ (Temporal Dead Zone):** The period between entering scope and the actual declaration where the variable cannot be accessed.

---

## 7. Literals & Data Types

**Types of literals in JavaScript:**

| Literal Type | Example | typeof |
|---|---|---|
| Integer | `25` | `"number"` |
| Float | `10.5` | `"number"` |
| Hexadecimal | `0x1F` | `"number"` |
| Binary | `0b1010` | `"number"` |
| Octal | `0o17` | `"number"` |
| Scientific | `1e3` (1000) | `"number"` |
| String | `"Hello"`, `'World'` | `"string"` |
| Boolean | `true`, `false` | `"boolean"` |
| Null | `null` | `"object"` |
| Undefined | `undefined` | `"undefined"` |
| BigInt | `12345678901234567890n` | `"bigint"` |
| Object | `{ name: "Aman" }` | `"object"` |
| Array | `["red", "green"]` | `"object"` |

**String quotes:** Double and single quotes both work. Single quote is JS convention.

```js
let x = "Hello";
let y = 'Hello';
let z = 'This is a "world" of god.'; // double quote inside single quote
let a = "This is a 'world' of god.";
```

---

## 8. null vs undefined

| null | undefined |
|---|---|
| Intentional absence of value | Value not yet assigned |
| Explicitly set by developer | Default JS behavior |
| `typeof null === "object"` (historical quirk) | `typeof undefined === "undefined"` |

```js
let emptyValue = null;     // "I know there is no value."
let notAssigned;           // "I have not set a value yet."

console.log(emptyValue);   // null
console.log(notAssigned);  // undefined
```

---

## 9. Template Literals (Interpolation)

Template literals use backticks (`) and `${}` for embedding expressions.

```js
let name = "Vineet";
let sentence = `Hey guys welcome ${name}.`;
console.log(sentence); // "Hey guys welcome Vineet."

// Also supports multi-line strings
let multi = `Line 1
Line 2`;
```

---

## 10. Operators

### Assignment Operator
```js
let x = 10;  // assigns 10 to x
```

### Arithmetic Operators
```js
let a = 10, b = 2;
a + b  // 12 (addition)
a - b  // 8  (subtraction)
a * b  // 20 (multiplication)
a / b  // 5  (division)
```

### Modulus Operator (%)
Returns the remainder of division.
```js
10 % 3  // 1
10 % 5  // 0
```

### Exponential Operator (**)
```js
2 ** 3  // 8 (2 × 2 × 2)
5 ** 4  // 625
```

### Compound Assignment Operators
```js
let x = 10;
x += 10;  // x = x + 10 → 20
x -= 3;   // x = x - 3  → 17
x *= 3;   // x = x * 3  → 51
x /= 3;   // x = x / 3  → 17
x %= 3;   // x = x % 3  → 2
```

### Comparison Operators
```js
<, >, >=, <=, ==, ===, !=, !==
```

**== (Loose) vs === (Strict):**
- `==` checks value only (performs type coercion)
- `===` checks value AND type

**Key interview comparisons:**
```js
42 == "42"    // true  (string coerced to number)
42 === "42"   // false (different types)

0 == ""       // true  (empty string → 0)
0 === ""      // false

false == 0    // true
false === 0   // false

null == undefined   // true  (special rule)
null === undefined  // false

NaN == NaN     // false (NaN is never equal to anything)
NaN === NaN    // false

[] == false    // true  ([] → "" → 0, false → 0)
[] === false   // false

{} == "[object Object]"  // true
```

**Rule: Always use `===` in production code. Never use `==`.**

### Logical Operators
```js
&&  // AND — both must be true
||  // OR  — at least one must be true

let a = true, b = false;
a && b  // false
a || b  // true
```

### String Concatenation Operator
```js
let x = "Hi";
x += " dev";  // "Hi dev"
```

### Ternary Operator (Conditional)
```js
condition ? valueIfTrue : valueIfFalse;

let age = 20;
let canVote = age >= 18 ? "Yes" : "No";

// Nested ternary
let decision = age > 18
    ? age > 26 ? "Can drink" : "Can go but can't drink"
    : "Cannot go";
```

**Max of 3 numbers using ternary:**
```js
let max = (x > y && x > z) ? x : (y > x && y > z) ? y : z;
```

### Nullish Coalescing Operator (??)
Returns right-hand side only when left-hand side is `null` or `undefined`.

```js
let amul = null;
let milkRequired = amul ?? "Mother Dairy";
console.log(milkRequired); // "Mother Dairy"
```

**Difference from `||`:** `??` treats only `null`/`undefined` as nullish. `||` treats all falsy values (`0`, `""`, `false`) as falsy.

### Increment / Decrement Operators

```js
++a  // Pre-increment: increment first, then use
a++  // Post-increment: use first, then increment
--a  // Pre-decrement
a--  // Post-decrement
```

```js
let a = 10;
let b = ++a; // a=11, b=11

let c = 10;
let d = c++; // c=11, d=10

// Tricky interview example:
let m = 5;
console.log(m++ + ++m - --m + m-- + ++m);
// Step-by-step:
// m++  → 5 (m=6)
// ++m  → 7 (m=7)
// --m  → 6 (m=6)
// m--  → 6 (m=5)
// ++m  → 6 (m=6)
// Result: 5 + 7 - 6 + 6 + 6 = 18
```

---

## 11. Control Flow — if/else

### Basic if/else
```js
if (condition) {
    // executes if truthy
} else {
    // executes if falsy
}
```

### if/else-if/else
```js
if (x < 10) {
    console.log("Less than 10");
} else if (x < 20) {
    console.log("Less than 20");
} else {
    console.log("20 or greater");
}
```

### Truthy vs Falsy Values

**Falsy values (evaluate to false in condition):**
- `false`
- `0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

**Truthy values (everything else):**
- `"hello"`, `34`, `{}`, `[]`, `true`, non-zero numbers, non-empty strings

```js
if ("hello") { }     // truthy
if (34) { }          // truthy
if ({}) { }          // truthy (empty object is truthy)
if ([]) { }          // truthy (empty array is truthy)
if ("") { }          // falsy
if (null) { }        // falsy
if (undefined) { }   // falsy
if (NaN) { }         // falsy
```

### Nested if/else (Real-world example)
```js
if (isLoggedIn) {
    if (userRole === "admin") {
        // Full access
    } else if (userRole === "editor") {
        // Edit access
    } else if (userRole === "viewer") {
        // View only
    }
} else {
    // Need to login
}
```

### Common Interview Tasks using if/else

**Even/Odd:**
```js
if (x % 2 === 0) { /* even */ } else { /* odd */ }
```

**Grade Calculator:**
```js
if (score >= 90) { /* A */ }
else if (score >= 80) { /* B */ }
else if (score >= 70) { /* C */ }
else if (score >= 60) { /* D */ }
else { /* Fail */ }
```

**Leap Year:**
```js
// Divisible by 400 OR (divisible by 4 AND not divisible by 100)
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    // Leap year
}
```

**HTTP Status Code Categorizer:**
```js
if (code >= 200 && code <= 299) { /* Success */ }
else if (code >= 300 && code <= 399) { /* Redirection */ }
else if (code >= 400 && code <= 499) { /* Client Error */ }
else if (code >= 500 && code <= 599) { /* Server Error */ }
```

---

## 12. Control Flow — switch

**Basic switch:**
```js
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Other day");
}
```

**Grouped cases (fall-through):**
```js
let browser = "firefox";
switch (browser) {
    case "chrome":
    case "brave":
    case "edge":
        console.log("Chromium project");
        break;
    case "firefox":
        console.log("Mozilla Package");
        break;
    default:
        console.log("Unknown browser");
}
```

**Key point:** `break` prevents fall-through. Without it, execution continues to the next case.

---

## 13. User Input

Not commonly used in automation (Playwright). Three approaches:

1. **prompt()** — Browser-based
2. **readline** — Node.js module
3. **prompt-sync** — npm package

```js
let num = prompt("Enter a number: ");
num = Number(num); // convert string to number
```

---

## 14. Quick Reference — Type Coercion Table

| Expression | == | === |
|---|---|---|
| `5 == "5"` | ✅ true | ❌ false |
| `true == 1` | ✅ true | ❌ false |
| `null == undefined` | ✅ true | ❌ false |
| `null == 0` | ❌ false | ❌ false |
| `false == ""` | ✅ true | ❌ false |
| `"" == 0` | ✅ true | ❌ false |
| `[] == false` | ✅ true | ❌ false |
| `NaN == NaN` | ❌ false | ❌ false |
| `{} == {}` | ❌ false (different refs) | ❌ false |

---

## 15. Key Interview Takeaways

1. **Always prefer `===` over `==`** — Avoids type coercion surprises.
2. **Prefer `let` and `const` over `var`** — Block scoping prevents leaks.
3. **`const` doesn't mean immutable** — Object properties can still change.
4. **Hoisting** — `var` is hoisted with `undefined`; `let`/`const` are hoisted but in TDZ.
5. **`??` (nullish) vs `||` (logical OR)** — `??` only catches `null`/`undefined`; `||` catches all falsy.
6. **`++a` vs `a++`** — Pre-increment returns new value; post-increment returns old value.
7. **Truthy/Falsy** — Memorize the 6 falsy values: `false`, `0`, `""`, `null`, `undefined`, `NaN`.
8. **switch with grouped cases** — Useful for mapping multiple inputs to one output.
9. **Template literals** — Prefer over concatenation for readability.
10. **NaN is never equal to anything** — Use `Number.isNaN()` to check.
