/*
expected = "Login Successful"
actual   = "Login Successful"

Output: ✅ Test Passed
expected = "Login Successful"
actual   = "Invalid Credentials"

Output: ❌ Test Failed – Expected: Login Successful, Got: Invalid Credentials
*/
let expected = "abc";
let actual = "abc";
let passOutput = "✅ Test Passed";
let failOutput = "❌ Test Failed";

if (actual === expected) {
    console.log("Output :", passOutput);
    console.log("expected =", expected);
    console.log("actual =", actual);
} else {
    console.log(`${failOutput} – Expected: ${expected}, Got: ${actual}`);
}
