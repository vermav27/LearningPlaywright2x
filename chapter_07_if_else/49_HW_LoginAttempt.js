/*
Problem:
Track failed login attempts. Lock the account after 3 failed attempts.
Sample Input/Output
Input: attempts = 2
Output: 1 attempt left before lockout
Input: attempts = 3
Output: 🔒 Account Locked – Contact support
Input: attempts = 0
Output: Login successful
*/
let attempts = 0;
let attemptLeft = 3 - attempts;
let output;
if (attempts >= 0 && attempts <= 3) {
    if (attempts === 0) {
        output = "Login successfull";
    } else if (attempts === 1) {
        output = `${attemptLeft} attempt left before lockout`;
    } else if (attempts === 2) {
        output = `${attemptLeft} attempt left before lockout`;
    } else if (attempts === 3) {
        output = "🔒 Account Locked – Contact support";
    }

    console.log("Input: attempts =", attempts);
    console.log("Output:", output);

}