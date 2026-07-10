// Comparing == (loose equality) vs === (strict equality) in JavaScript

// 1. String vs Number
console.log("== :", 5 == "5");   // true  (coercion: string -> number)
console.log("===:", 5 === "5");  // false (different types)

// 2. Boolean vs Number
console.log("== :", true == 1);   // true  (coercion: boolean -> number)
console.log("===:", true === 1);  // false

// 3. Boolean vs String
console.log("== :", true == "1");   // true  (true -> 1, "1" -> 1)
console.log("===:", true === "1");  // false

// 4. null vs undefined
console.log("== :", null == undefined);   // true  (special rule)
console.log("===:", null === undefined);  // false (different types)

// 5. null vs 0
console.log("== :", null == 0);   // false (null is not coerced to 0)
console.log("===:", null === 0);  // false

// 6. undefined vs 0
console.log("== :", undefined == 0);   // false
console.log("===:", undefined === 0);  // false

// 7. false vs "false"
console.log("== :", false == "false");   // false (string "false" is NaN when coerced)
console.log("===:", false === "false");  // false

// 8. false vs ""
console.log("== :", false == "");   // true  ("" -> 0, false -> 0)
console.log("===:", false === "");  // false

// 9. "" vs 0
console.log("== :", "" == 0);   // true  ("" -> 0)
console.log("===:", "" === 0);  // false

// 10. [] vs false
console.log("== :", [] == false);   // true  ([] -> "" -> 0, false -> 0)
console.log("===:", [] === false);  // false

// 11. [] vs ""
console.log("== :", [] == "");   // true  ([] -> "")
console.log("===:", [] === "");  // false

// 12. [] vs 0
console.log("== :", [] == 0);   // true  ([] -> "" -> 0)
console.log("===:", [] === 0);  // false

// 13. {} vs "[object Object]"
console.log("== :", {} == "[object Object]");   // true  (toString on object)
console.log("===:", {} === "[object Object]");  // false

// 14. NaN comparisons (NaN is never equal to anything, even itself)
console.log("== :", NaN == NaN);   // false
console.log("===:", NaN === NaN);  // false

// 15. Array with single value
console.log("== :", [1] == 1);     // true  (coercion chain)
console.log("===:", [1] === 1);    // false

// 16. Object vs Object (reference comparison)
const a = { x: 1 };
const b = { x: 1 };
const c = a;
console.log("== :", a == b);   // false (different references)
console.log("===:", a === b);  // false
console.log("== :", a == c);   // true  (same reference)
console.log("===:", a === c);  // true

// 17. Wrapper objects
console.log("== :", new String("hi") == "hi");   // true  (unboxing)
console.log("===:", new String("hi") === "hi");  // false (object vs primitive)

// 18. null is not equal to empty string
console.log("== :", null == "");   // false
console.log("===:", null === "");  // false
