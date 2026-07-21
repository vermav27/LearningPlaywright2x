function retry(testName, maxRetries = 3, delay = 2000) {
    console.log(`Retrying ${testName} upto ${maxRetries} with ${delay}`);
}

retry("Login to Dashboard"); // It will call the function retry and it will by default take the parameters in function
retry("Signup", 5, 5000); // // It will call the function retry and it will use the parameters provided while function calling.

