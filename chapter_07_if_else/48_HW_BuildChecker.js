/*
Problem:
Given the percentage of test cases passed in a CI build, report build health.

• 100% → Green Build
• 90–99% → Stable (Investigate failures)
• 70–89% → Unstable
• Below 70% → Broken Build (Block deployment)
Sample Input/Output
Input: 95
Output: 🟡 Stable – Investigate failures

Input: 65
Output: 🔴 Broken Build – Block deployment
*/
let percentage = 100;
let output;

if (percentage < 70) {
    output = "🔴 Broken Build – Block deployment";
} else if (percentage >= 70 && percentage <= 89) {
    output = "🟠 Unstable";
} else if (percentage >= 90 && percentage <= 99) {
    output = "🟡 Stable – Investigate failures";
} else {
    output = "🟢 Green Build";
}

console.log("Input:", percentage);
console.log("Output:", output);