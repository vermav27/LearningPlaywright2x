let config = {};

config.browser = "chrome";
config.timeout = 3000;
config.env = "staging";

delete config.env; // it deletes the key value from a object.

if (config.env === "staging") {
    console.log(`We are in ${config.env} environment`);
}

console.log(config);