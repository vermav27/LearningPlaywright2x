// Searching & Checking
let url = "https://www.staging.sciensus.com";

// includes
console.log(url.includes("staging"));
console.log(url.includes("production"));


// startwith / endswith
console.log(url.startsWith("https://"));
console.log(url.startsWith("http://"));
console.log(url.endsWith(".com"));

// indexof - lastindexof
console.log(url.indexOf("staging"));
console.log(url.lastIndexOf("g"));


// search
console.log(url.search(/staging/)); // here / / is the regex - regular Expression
