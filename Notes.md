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

## 14. Control Flow — Loops

### for Loop
Repeats a block of code a specific number of times.

```js
for (initialization; condition; updation) {
    // code to execute each iteration
}

for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}
```

**Flow:** Initialize → Check condition → Execute body → Update → Re-check condition → ...

### while Loop
Repeats as long as the condition is true. Use when the number of iterations is unknown.

```js
let attempt = 0;
while (attempt <= 4) {
    console.log("Attempt:", attempt);
    attempt++;
}
```

**Key point:** Condition is checked **before** the body runs. If the condition is false initially, the body never executes.

### do-while Loop
Similar to while, but the body runs **at least once** before the condition is checked.

```js
let retry = 1;
do {
    console.log("Retrying attempt =", retry);
    retry++;
} while (retry < 4);
```

**Key point:** Guarantees at least one execution — useful when the action must happen before you know if you need to repeat.

### break vs continue

| Keyword | Effect |
|---|---|
| `break` | **Exits the entire loop** immediately |
| `continue` | **Skips the current iteration** and moves to the next |

**break example:**
```js
for (let i = 0; i < 10; i++) {
    if (i === 4) break;  // loop stops when i reaches 4
    console.log(i);       // 0, 1, 2, 3
}
```

**continue example:**
```js
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;  // skip i=2
    console.log(i);          // 0, 1, 3, 4
}
```

---

## 15. Quick Reference — Type Coercion Table

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

## 16. Key Interview Takeaways

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
11. **`Array.isArray()` over `typeof`** — `typeof []` returns `"object"`, use `Array.isArray()`.
12. **`slice()` vs `splice()`** — `slice` = non-mutating copy; `splice` = mutates the original (delete/insert).
13. **`sort()` defaults to string sort** — Always pass `(a,b) => a-b` for numeric sort.
14. **`at(-1)` for last element** — Cleaner than `arr[arr.length - 1]`.
15. **`every()` on empty array returns `true`** — Vacuously true. `some()` on empty returns `false`.
16. **`splice(start, deleteCount, ...items)`** — Versatile: remove, insert, or replace at any index.

---

## 17. Array Transformation Methods

Array transformation methods **do not mutate the original array** — they return a new array or value based on it.

### map() — Transform each element

Creates a new array by applying a function to **every element** of the original array. The output array always has the **same length** as the input.

```js
let score = [23, 45, 78, 77, 90, 43, 23];

// Convert each score into "Pass" or "Fail"
let result = score.map(s => s > 70 ? "Pass" : "Fail");
console.log(result);
// ["Fail", "Fail", "Pass", "Pass", "Pass", "Fail", "Fail"]

// Another example — double each number
let nums = [1, 2, 3, 4];
let doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]
```

**When to use:** You need to convert every item in an array to something else (e.g., numbers → strings, objects → specific properties).

---

### filter() — Keep only matching elements

Creates a new array containing only the elements that pass a condition. The output array is **equal or shorter** than the input.

```js
let score = [23, 45, 78, 77, 90, 43, 23];

// Keep only scores above 60
let passed = score.filter(x => x > 60);
console.log(passed);
// [78, 77, 90]

// Another example — keep only even numbers
let numbers = [1, 2, 3, 4, 5, 6];
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]
```

**When to use:** You need to remove elements that don't match a criterion.

---

### reduce() — Reduce array to a single value

Accumulates each element into a single result (sum, product, object, etc.). The callback receives an **accumulator** and the **current element**, and returns the new accumulator.

```js
let score = [23, 45, 78, 77, 90, 43, 23];

// Sum all scores (starting from 0)
let total = score.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total); // 379

// What happens step-by-step:
// acc=0, val=23 → 23
// acc=23, val=45 → 68
// acc=68, val=78 → 146
// acc=146, val=77 → 223
// acc=223, val=90 → 313
// acc=313, val=43 → 356
// acc=356, val=23 → 379 ✅

// Without initial value — uses first element as starting accumulator
let sum = score.reduce((a, b) => a + b);
console.log(sum); // 379 (same result)

// Another example — find max value
let maxScore = score.reduce((max, current) => current > max ? current : max);
console.log(maxScore); // 90
```

**When to use:** You need a single result from an array — sum, average, max, min, or building an object/string from array data.

---

### flat() — Flatten nested arrays

Flattens nested arrays into a single-level array. By default, it goes **one level deep**. To go deeper, pass a depth number or `Infinity`.

```js
let nested = [[1, 2, 3], [5, 6, [5, 7]], [7, 8]];

// Default depth = 1
console.log(nested.flat());
// [1, 2, 3, 5, 6, [5, 7], 7, 8]
// The inner [5, 7] stayed nested because it's 2 levels deep

// Depth = 2
console.log(nested.flat(2));
// [1, 2, 3, 5, 6, 5, 7, 7, 8]

// Depth = Infinity (flatten everything)
let deep = [1, [2, [3, [4]]]];
console.log(deep.flat(Infinity));
// [1, 2, 3, 4]
```

**When to use:** You have nested arrays (e.g., from splitting data) and need a flat list.

---

### Quick Comparison

| Method | What it does | Returns | Same length? |
|---|---|---|---|
| `map()` | Transforms each element | New array | ✅ Yes |
| `filter()` | Keeps matching elements | New array | ❌ No (shorter) |
| `reduce()` | Accumulates into one value | Single value | N/A |
| `flat()` | Flattens nested arrays | New array | ❌ No (differs) |

### Chaining — Combine methods

Since these methods return arrays (except `reduce`), you can **chain** them together:

```js
let score = [23, 45, 78, 77, 90, 43, 23];

// Get total of all scores above 60
let totalPassing = score
    .filter(s => s > 60)      // [78, 77, 90]
    .reduce((a, b) => a + b); // 78 + 77 + 90 = 245

console.log(totalPassing); // 245
```

---

## 18. Creating Arrays

Arrays in JavaScript can be created using **literal syntax** or **constructors**.

```js
// Array literal (preferred)
let fruits = ["apple", "mango", "banana"];
let empty = [];
let mixed = ["hello", 23, true, null]; // mixed types allowed

// Array constructor (single arg = length, multiple = elements)
let score1 = new Array(3);      // [empty × 3] — length 3, no elements
let score2 = new Array(1, 2, 3); // [1, 2, 3]

// Array.of() — creates array from arguments (avoids constructor ambiguity)
let marks = Array.of(20, 40, 45, 60); // [20, 40, 45, 60]

// Array.from() — converts iterables (strings, sets, etc.) to array
let fromArray = Array.from("Vineet"); // ["V", "i", "n", "e", "e", "t"]
```

**Key distinction:** `new Array(3)` creates an array of length 3 with empty slots. `new Array(1, 2, 3)` creates `[1, 2, 3]`. `Array.of()` avoids this ambiguity — `Array.of(3)` always gives `[3]`.

---

## 19. Accessing & Modifying Array Elements

### Index-based access
```js
let arr = [10, 20, 30, 40, 50];
console.log(arr[3]);  // 40
console.log(arr[5]);  // undefined (out of bounds)
```

### at() method — supports negative indices
```js
let status = ["pass", "fail", "skip"];

console.log(status.at(1));   // "fail"
console.log(status.at(-1));  // "skip"  (last element)
console.log(status.at(-2));  // "fail"
console.log(status.at(-4));  // undefined (out of bounds)
```

**Negative indexing:** `-1` = last element, `-2` = second-to-last, etc. Safer than `arr[arr.length - 1]` for accessing from the end.

### Modifying elements
```js
let status = ["pass", "fail", "skip"];
status[1] = "blocked";
console.log(status); // ["pass", "blocked", "skip"]
```

---

## 20. Adding & Removing Elements

| Method | Action | Position | Mutates? |
|---|---|---|---|
| `push(val)` | Add to end | End | ✅ Yes |
| `pop()` | Remove from end | End | ✅ Yes |
| `unshift(val)` | Add to beginning | Start | ✅ Yes |
| `shift()` | Remove from beginning | Start | ✅ Yes |
| `splice(start, deleteCount, ...items)` | Remove/insert at any index | Anywhere | ✅ Yes |

### push / pop — end of array
```js
let arr = [2, 3, 4, 5, 6];

arr.push(90);        // [2, 3, 4, 5, 6, 90]
arr.pop();           // [2, 3, 4, 5, 6]
arr.push(56, "hello"); // [2, 3, 4, 5, 6, 56, "hello"]
```

### unshift / shift — beginning of array
```js
let arr = [2, 3, 4, 5, 6];

arr.unshift(21);    // [21, 2, 3, 4, 5, 6]
arr.shift();        // [2, 3, 4, 5, 6]
```

### splice() — the swiss army knife of array modification

`splice(start, deleteCount, ...itemsToAdd)`

```js
let arr = [2, 3, 4, 5, 6, 56, "hello"];

// Remove 3 elements from index 2, insert "vineet"
arr.splice(2, 3, "vineet");
// Result: [2, 3, "vineet", 56, "hello"]

// Remove 1 element from index 2 (no insert)
arr.splice(2, 1);
// Result: [2, 3, 56, "hello"]

// Insert at index 2 without removing anything
arr.splice(2, 0, 1);
// Result: [2, 3, 1, 56, "hello"]

// Remove 2 from index 1, insert 2 elements
arr.splice(1, 2, "vineet", 78);
// Result: [2, "vineet", 78, 56, "hello"]
```

**Interview tip:** `splice()` mutates the original array. For a non-mutating version, use `toSpliced()` (ES2023).

---

## 21. Searching in Arrays

| Method | Returns | Description |
|---|---|---|
| `indexOf(value)` | Number (index or `-1`) | First occurrence index |
| `lastIndexOf(value)` | Number (index or `-1`) | Last occurrence index |
| `includes(value)` | Boolean | Presence check |
| `find(callback)` | Element or `undefined` | First element matching condition |
| `findIndex(callback)` | Number (index or `-1`) | Index of first match |
| `findLast(callback)` | Element or `undefined` | Last element matching condition (ES2023) |
| `findLastIndex(callback)` | Number (index or `-1`) | Index of last match (ES2023) |

```js
let names = ["vihan", "vineet", "Anil", "Saroj", "Vineet"];

names.indexOf("vineet");      // 1 (first occurrence)
names.indexOf("shreya");      // -1 (not found)
names.lastIndexOf("Vineet");  // 4 (last occurrence)
names.includes("Mohit");      // false
names.includes("Vineet");     // true

// find/findIndex — search by condition
let x = [2, 4, 6, 8];
x.find(y => y > 4);        // 6 (first element > 4)
x.findIndex(y => y > 4);   // 2 (index of that element)

// findLast/findLastIndex — search from the end
let p = [2, 4, 6, 8];
p.findLast(q => q > 4);       // 8 (last element > 4)
p.findLastIndex(q => q > 4);  // 3 (index of that element)
```

**Interview tip:** `find`/`findIndex` search from the start; `findLast`/`findLastIndex` search from the end. All use a callback condition rather than a value.

---

## 22. Iterating Over Arrays

```js
let names = ["Vineet", "Bhushan", "Mohit", "Nitesh", "Anuj"];

// 1. Traditional for loop (full control)
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// 2. for...of (values directly — preferred for simple iteration)
for (let x of names) {
    console.log(x);
}

// 3. forEach (with index)
names.forEach((n, i) => {
    console.log(n, i);
});

// 4. for...in (iterates keys/indices — not recommended for arrays)
for (let n in names) {
    console.log(names[n]);
}
```

| Method | Iterates | Use Case |
|---|---|---|
| `for` loop | Indices | When you need index-based logic |
| `for...of` | Values | Clean, readable iteration |
| `forEach()` | Values + indices | When you need both value and index |
| `for...in` | Keys (indices) | **Avoid for arrays** — meant for objects |

---

## 23. Sorting Arrays

### Default sort — lexicographic (string-based)
By default, `sort()` converts elements to strings and sorts by **Unicode code point order**. This means numbers don't sort numerically:

```js
let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"] ✅ (strings work fine)

let numbered = [3, 5, 10, 29, 4, 6, 9, 3];
numbered.sort();
console.log(numbered);
// [10, 29, 3, 3, 4, 5, 6, 9] ❌ (sorted as strings — "10" comes before "3")
```

### Numeric sort — using a compare function

```js
let digits = [3, 5, 10, 29, 4, 6, 9, 3];

// Ascending
digits.sort((a, b) => a - b);
console.log(digits); // [3, 3, 4, 5, 6, 9, 10, 29]

// Descending
digits.sort((a, b) => b - a);
console.log(digits); // [29, 10, 9, 6, 5, 4, 3, 3]
```

**How the compare function works:**
- `a - b` < 0 → `a` comes before `b` (ascending)
- `a - b` > 0 → `b` comes before `a` (descending)
- `a - b` === 0 → order unchanged

**Interview tip:** Always pass a compare function when sorting numbers. The default string-based sort is one of the most common JS gotchas.

---

## 24. Slicing Arrays — slice()

`slice(start, end)` returns a **new array** from `start` to `end-1`. Does **not** mutate the original.

```js
let num = [1, 2, 3, 4, 5];

num.slice(1, 3);   // [2, 3]  (index 1 to index 2, exclusive of 3)
num.slice(2);      // [3, 4, 5] (from index 2 to end)
num.slice(-2);     // [4, 5]  (last 2 elements — negative indexing)
num.slice();       // [1, 2, 3, 4, 5] (shallow copy)
```

**Interview tip:** `slice()` vs `splice()` confusion is common. Remember: **sl**ice = **s**hallow copy (non-mutating), **spl**ice = mutates the original.

---

## 25. Combining Arrays

### concat()
```js
let x = [1, 2, 3, 4];
let y = [9, 8, 7, 6];

let c = x.concat(y);
console.log(c); // [1, 2, 3, 4, 9, 8, 7, 6]
```

### Spread operator (...) — modern alternative
```js
let d = [...x, ...y];
console.log(d); // [1, 2, 3, 4, 9, 8, 7, 6]
```

### join() — convert array to string
```js
let x = [1, 2, 3, 4];

x.join("|");  // "1|2|3|4"
x.join("-");  // "1-2-3-4"
x.join("");   // "1234"
x.join();     // "1,2,3,4" (default comma separator)
```

**Interview tip:** Spread syntax `[...arr1, ...arr2]` is preferred over `concat()` in modern code — it's more readable and works with any iterable.

---

## 26. Array Validation & Assertions

### Array.isArray() — check if something is an array
```js
let x = [1, 2, 3, 4];
Array.isArray(x);   // true
Array.isArray("a"); // false
```

**Why not `typeof`?** `typeof []` returns `"object"`, not `"array"`. `Array.isArray()` is the only reliable check.

### every() — all elements must pass
Returns `true` only if **every** element satisfies the condition. Short-circuits on first failure.

```js
let numbers = [80, 85, 90];

numbers.every(s => s > 70);  // true  (all are > 70)
numbers.every(s => s > 85);  // false (80 is not > 85)
```

### some() — at least one must pass
Returns `true` if **at least one** element satisfies the condition. Short-circuits on first success.

```js
let numbers = [80, 85, 90];

numbers.some(s => s < 85);  // true  (80 is < 85)
numbers.some(s => s < 10);  // false (none are < 10)
```

### Quick Comparison

| Method | Returns | When true | When false |
|---|---|---|---|
| `every()` | Boolean | **All** elements pass | First fails → `false` |
| `some()` | Boolean | First passes → `true` | **None** pass |
| `includes(value)` | Boolean | Value found | Not found |
| `Array.isArray(val)` | Boolean | It's an array | Not an array |

**Interview tip:** `every()` on an empty array returns `true` (vacuously true). `some()` on an empty array returns `false`.
```
