function infiniteLoop(): never {
    while (true) { } // this can be a infinite loop, in this case return type is never means function will never return
}

function throwError(message: string): never {
    throw new Error(message); // this can throw error, in this case return type is never means function can only throw error
}

// Never basically means that it will never return anything. Or It will be used when we know that it can return exception.
