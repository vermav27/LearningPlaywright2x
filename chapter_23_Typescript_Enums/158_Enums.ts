enum TestStatus {
    Pass = "PASS",
    Fail = "FAIL",
    Skipped = "SKIPPED",
    Pending = "PENDING",
    Blocked = "BLOCKED"
}

enum SeverityLevels {
    high = "HIGH",
    low = "LOW",
    medium = "MEDIUM",
    critical = "CRITICAL",
    blocking = "BLOCKING"
}

console.log(TestStatus.Fail + " --> " + SeverityLevels.critical);