# Default Export vs Named Export

## Reference Example

In `logger.js`, there are two exports:

```js
export default function log1(message) {
    console.log("[LOG] - DEF - " + message)
}

export function log2(message) {
    console.log("[LOGS] - " + message);
}
```

Here:

- `log1` is a default export.
- `log2` is a named export.

In `130_Logger.js`, the default export is imported like this:

```js
import log1 from "../logger.js";

log1("Starting test case");
```

## Default Export

A default export is used when a file mainly exports one main value, function, class, or object.

Example:

```js
export default function log1(message) {
    console.log("[LOG] - DEF - " + message)
}
```

Importing a default export:

```js
import log1 from "../logger.js";
```

Important points:

- A file can have only one default export.
- While importing, curly braces are not required.
- The imported name can be changed.

Example:

```js
import logger from "../logger.js";

logger("Starting test case");
```

Even though the exported function name is `log1`, we can import it as `logger` because it is a default export.

## Named Export

A named export is used when a file exports multiple values, functions, classes, or objects.

Example:

```js
export function log2(message) {
    console.log("[LOGS] - " + message);
}
```

Importing a named export:

```js
import { log2 } from "../logger.js";

log2("Starting test case");
```

Important points:

- A file can have multiple named exports.
- While importing, curly braces are required.
- The import name must match the export name.

## Difference Between Default Export and Named Export

| Default Export | Named Export |
| --- | --- |
| Used for one main export from a file | Used for multiple exports from a file |
| Only one default export is allowed in one file | Multiple named exports are allowed |
| Imported without curly braces | Imported with curly braces |
| Import name can be changed easily | Import name should match the exported name |
| Example: `import log1 from "../logger.js"` | Example: `import { log2 } from "../logger.js"` |

## Using Both Together

Since `logger.js` has both default and named exports, both can be imported together:

```js
import log1, { log2 } from "../logger.js";

log1("Starting test case");
log2("Test case completed");
```

## Quick Rule

Use default export when the file has one main thing to export.

Use named export when the file has many things to export.
