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
        console.log("browser not known");

}