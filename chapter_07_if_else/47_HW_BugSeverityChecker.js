/*
Problem:
Given a bug severity score (1–10), classify the severity.

• 9–10 → Critical (Block release)
• 7–8 → High
• 4–6 → Medium
• 1–3 → Low
• Anything else → Invalid score
Sample Input/Output
Input: 9
Output: Severity: Critical – Block release

Input: 5
Output: Severity: Medium
*/
let bugSeverityScore = 9;
let severity;

if (bugSeverityScore >= 1 && bugSeverityScore <= 3) {
    severity = "Low";
} else if (bugSeverityScore >= 4 && bugSeverityScore <= 6) {
    severity = "Medium";
} else if (bugSeverityScore === 7 || bugSeverityScore === 8) {
    severity = "High";
} else if (bugSeverityScore === 9 || bugSeverityScore === 10) {
    severity = "Critical (Block Release)";
} else {
    severity = "Invalid Score";
}

console.log("Input:", bugSeverityScore);
console.log("Output:", severity);