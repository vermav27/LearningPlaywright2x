console.log("Hi");

function hello(msg: string): void {
    console.log("Hello ! How are You ? ", msg);
}

hello("Vineet");

// For running the file use command : 
// ts-node chapter_21_Typescript/146_typescript.ts
// whenever we use ts-node -> It compile and run it ( complied file is not shown to us )

// For running the file one more command : tsc  chapter_21_Typescript/146_typescript.ts --ignoreConfig
// // whenever we use tsc -> Compiled file is shown to us