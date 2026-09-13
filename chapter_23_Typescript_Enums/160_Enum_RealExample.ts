enum Browser {
    firefox = "FIREFOX",
    chrome = "CHROME",
    ie = "INTERNET EXPLORER",
    safari = "SAFARI"
}

function LaunchBrowser(browser: Browser): void {
    switch (browser) {
        case Browser.firefox:
            console.log("Launching mozilla firefox....");
            break;
        case Browser.chrome:
            console.log("Launching google chrome...");
            break;
        case Browser.ie:
            console.log("Launching microsoft internet explorer...");
            break;
        case Browser.safari:
            console.log("Launching apple safari...");
            break;
    }
}

LaunchBrowser(Browser.chrome);
