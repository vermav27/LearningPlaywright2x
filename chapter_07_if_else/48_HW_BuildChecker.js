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