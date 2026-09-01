# LearningPlaywright2x

This repository is a beginner-friendly learning project focused on JavaScript fundamentals, Playwright automation basics, and OOPS/module concepts.

## What is included

- Basic JavaScript syntax and commands
- Core JavaScript fundamentals such as identifiers, literals, comments, and functions
- Variable behavior using var, let, and const
- Scope, hoisting, and block-level behavior examples
- Number, string, null, undefined, and template literal examples
- Operator examples covering arithmetic, comparison, logical, ternary, nullish, increment/decrement, and string concatenation
- Loop constructs: for, while, do-while, break, continue, and pattern-based homework (triangle classifier, right-angle triangle, left-right triangle, pyramid)
- Array creation, access, manipulation (adding/removing), searching, iteration, and transformation (map, filter, reduce, flat)
- Function types (no return/with return, no param/with param), function expressions, arrow functions, IIFE, default parameters, rest parameters, closures, higher-order functions, and pure functions
- String operations: creation, properties, searching, substrings, transformation, concatenation, split/join, conversion, and character access
- Object fundamentals: creation, access, reference behavior, properties, methods, destructuring, spread, nesting, getters/setters, Object.keys/values/entries, and for...in loops
- 2D Array fundamentals: creation, nested loop iteration, row-wise operations with `map`+`reduce`, and practical filtering (e.g., extracting failed test names from a test suite matrix)
- Callback fundamentals: passing callbacks (named, anonymous, arrow), synchronous vs asynchronous callbacks with `setTimeout`, callbacks with parameters, and callback hell (nested callbacks)
- Promise fundamentals: promise creation with `resolve`/`reject`, states, `.then()`/`.catch()`/`.finally()`, solving callback hell with promise chaining, `Promise.all()`, and `Promise.allSettled()`
- Async/Await fundamentals: `async` functions, `await` on promises, `try`/`catch`/`finally` error handling, solving callback hell with sequential async/await, sequential awaited API calls, and parallel calls with `Promise.all` / `Promise.allSettled` + destructuring
- Playwright basics: TypeScript Playwright specs with `@playwright/test`, page navigation, locator actions (click/fill), assertions, Chromium project config, HTML reports, and test result output
- OOPS basics: ES module export/import examples, named exports, default exports, aliases, classes, objects, constructors, encapsulation, inheritance, polymorphism, private fields, and static members
- VS Code shortcut notes for Windows and macOS

## Project Structure

- chapter_01_Basics/ - beginner JavaScript basics and simple commands
  - 01_Basics.js
  - 02_JS.js
  - 03_JS_commands.js

- chapter_02_Javascript_Concepts/ - introductory JavaScript concepts
  - 04_JS_Basics.js

- chapter_03_Identifier_Literals/ - identifiers, comments, and VS Code shortcuts
  - 05_Identifiers_Rules.js
  - 06_Identifiers_Part2.js
  - 07_Comments.js
  - VSCODE_shortcut_mac.md
  - VSCODE_shortcut_windows.md

- chapter_04_Javascript_concepts/ - variables, functions, scope, and hoisting
  - 08_var_let_const.js
  - 09_functions.js
  - 10_var_explained.js
  - 11_let_people_love.js
  - 12_const_explained.js
  - 13_var_functionscoped.js
  - 14_let_scope.js
  - 15_hoisting.js
  - 16_hoisting_functions.js
  - 17_let_hoisting.js
  - 18_let_hoisting_block.js
  - 19_const_hoisting.js

- chapter_05_literal/ - literals and data type examples
  - 20_literal.js
  - 21_null_vs_undefined.js
  - 22_literals_number_all.js
  - 23_Strings.js
  - 24_template_literal.js

- chapter_06_Operator/ - operator examples and practice
  - 25_Operator.js
  - 26_Arithmetic_Operator.js
  - 27_Modulus_Operator.js
  - 28_Exponential_Operator.js
  - 29_Compound_Operator.js
  - 30_Comparison_Operator.js
  - 31_Comparison_Op_Confusing.js
  - 32_Logical_Operator.js
  - 33_String_Concat_Op.js
  - 34_Ternary_Op.js
  - 35_HW_Ternary_Op.js
  - 36_Nullish_Op.js
  - 37_Increment_Decrement_Op.js

- chapter_07_if_else/ - conditional logic with if/else, if/else-if/else, and real-world tasks
  - 38_if_else.js
  - 39_if_elseif_else.js
  - 40_RealExample_ifElse.js
  - 41_if_else_example.js
  - 42_TASK_even_odd.js
  - 43_TASK_grade_calculator.js
  - 44_TASK_leapYear.js
  - 45_HW_statusCode_categorizer.js
  - 46_HW_TestCaseChecker.js
  - 47_HW_BugSeverityChecker.js
  - 48_HW_BuildChecker.js
  - 49_HW_LoginAttempt.js

- chapter_08_switch_statement/ - switch and grouped case statements
  - 50_switch.js
  - 51_switchGroup.js

- chapter_09_user__input/ - capturing and handling user input
  - 52_userinput.js

- chapter_10_loops/ - loop constructs: for, while, do-while, break, continue, and pattern homework
  - 53_ForLoop.js
  - 54_For_Of_In_Each.js
  - 55_whileLoop.js
  - 56_dowhile.js
  - 57_continuekeyword.js
  - 58_breakkeyword.js
  - 59_HW_triangleClassifier.js
  - 60_HW_rightangle_triangle.js
  - 61_HW_leftright_triangle.js
  - 62_HW_Pyramid_pattern.js

- chapter_11_arrays/ - array creation, access, manipulation, searching, iteration, transformation, sorting, slicing, concatenation, and validation
  - 63_arrays.js
  - 64_arrays.js
  - 65_Access_Array.js
  - 66_adding_removing.js
  - 67_searching.js
  - 68_iteration.js
  - 69_transform_arrays.js
  - 70_array.js
  - 71_slice.js
  - 72_concatenate.js
  - 73_checkArray.js

- chapter_12_functions/ - function types (no return/with return, no param/with param), function expressions, arrow functions, IIFE, default parameters, rest parameters, closures, higher-order functions, and pure functions
  - 74_function.js
  - 75_NoReturnType_NoParam.js
  - 76_NoReturnType_WithParam.js
  - 77_WithReturnType_NoParam.js
  - 78_WithReturnType_WithParam.js
  - 79_FunctionExpression.js
  - 80_ArrowFunction.js
  - 81_ImmediateInvokedfunction.js
  - 82_Default_Param_Fn.js
  - 83_Rest_Param.js
  - 84_closure.js
  - 85_HigherOrder_Func.js
  - 86_Pure_Func.js

- chapter_13_strings/ - string operations: creation, properties, searching, substrings, transformation, concatenation, split/join, conversion, and character access
  - 87_Strings.js
  - 88_String_Properties.js
  - 89_Search_Check.js
  - 90_substring.js
  - 91_Transform_String.js
  - 92_StringConversion.js

- chapter_14_objects/ - object fundamentals: creation, access, reference behavior, properties, methods, destructuring, spread, nesting, getters/setters, Object.keys/values/entries, and for...in loops
  - 93_objects.js
  - 94_objects.js
  - 95_RealExample.js
  - 96_primitive_Ref.js
  - 97_dynamicpropertyaccess.js
  - 98_object_function.js
  - 99_destructuring.js
  - 100_object_in_object.js
  - 101_spread.js
  - 102_Get_Set_Method.js
  - 103_Object_KeyValueEntries.js

- chapter_15_2D_Array/ - 2D array fundamentals: creation, nested loop iteration, row-wise map+reduce, and practical test-suite filtering
  - 104_2D_Array.js
  - 105_2D_Array.js
  - 106_Array_Fn.js

- chapter_16_callback/ - callback fundamentals: passing callbacks (named, anonymous, arrow), sync vs async callbacks, callbacks with parameters, and callback hell
  - 107_callback.js
  - 108_callback.js
  - 109_Timeout_Callback.js
  - 110_sync_callback.js
  - 111_async_callback.js
  - 112_callbackHell.js
  - 113_callbackWithParameters.js

- chapter_17_promises/ - promise fundamentals: creation with resolve/reject, states, .then()/.catch()/.finally(), promise chaining, Promise.all(), and Promise.allSettled()
  - 114_promise.js
  - 115_realAPIPromise.js
  - 116_realAPIPromise_Part2.js
  - 117_realAPIPromise_Part3.js
  - 118_callbackHellProblemSolved.js
  - 119_promiseALL.js
  - 120_promiseAllSettled.js

- chapter_18_Async_Await/ - async/await fundamentals: async functions, await on promises, try/catch/finally, solving callback hell, sequential awaited API calls, and parallel calls with Promise.all / Promise.allSettled
  - 121_async.js
  - 122_async_P2.js
  - 123_PyramidOfDoom_Solution.js
  - 124_async_P3.js
  - 125_async_await_ex.js
  - 126_async_await_parallelTest.js
  - 127_async_allSettled.js

- chapter_19_playwright_Basics/ - Playwright basics with TypeScript specs, Chromium config, page navigation, locator actions, and assertions
  - .gitignore — ignores Playwright generated folders such as node_modules, test-results, playwright-report, blob-report, and cache/auth folders
  - .github/workflows/playwright.yml — generated GitHub Actions workflow for Playwright test runs
  - package.json — Playwright test scripts (`npm test`, `npm run test:tta-cart`) and dev dependencies
  - package-lock.json
  - playwright.config.ts — TypeScript config using `testDir: './tests'`, Chromium, HTML reporter, and `test-results` output
  - tests/example.spec.ts — basic TTACart navigation test with heading assertion
  - tests/codegen_tta-cart.spec.ts — login error test against the TTACart demo app with data-test locators and assertions
  - sdet.pdf — reference material

- chatper_20_OOPS_Basics/ - OOPS basics covering module exports/imports, class/object concepts, encapsulation, inheritance, and polymorphism
  - testUtils.js — named exports: `BASE_URL`, `formatTestName`, and `name`
  - logger.js — default export `log1` and named export `log2`
  - 01_EXPORT_IMPORT/128_EXPORT_IMPORT.js — imports named exports from `testUtils.js`
  - 01_EXPORT_IMPORT/129_Utils.js — imports named exports with aliases
  - 01_EXPORT_IMPORT/130_Logger.js — imports the default export from `logger.js`
  - 01_EXPORT_IMPORT/Explaindefault.md — notes and comparison table for default export vs named export
  - 02_CLASS_OBJECT/131_Class_Object.js — basic class blueprint with attributes and methods
  - 02_CLASS_OBJECT/132_Class_Object_2.js — constructor basics and object creation
  - 02_CLASS_OBJECT/133_Car.js — constructor parameters, `this`, and instance methods
  - 02_CLASS_OBJECT/134_RealBrowser.js — practical `Testcase` class example and method vs function
  - 02_CLASS_OBJECT/135_Private_Public.js — public vs private fields using `#`
  - 02_CLASS_OBJECT/136_Static.js — static properties vs instance properties
  - 03_ENCAPSULATION/137_encapsulation.js — encapsulation using private `#balance` and public method access
  - 04_INHERITANCE/138_SingleInheritence.js — basic single inheritance with a base page and login page
  - 04_INHERITANCE/139_SingleInheritance.js — constructor inheritance using `super()`
  - 04_INHERITANCE/140_SingleInheritence.js — method overriding in a child class
  - 04_INHERITANCE/141_SuperKeyword.js — calling parent class behavior with `super`
  - 04_INHERITANCE/142_HieraricalInheritence.js — hierarchical inheritance with multiple child classes
  - 04_INHERITANCE/143_MultilevelInheritence.js — multilevel inheritance chain
  - 05_POLYMORPHISM/144_Polymorphism.js — polymorphism through method overriding

## How to use

1. Open any JavaScript file in VS Code.
2. Read the comments and example code carefully.
3. Run the files using Node.js to observe the output.
4. Use the notes in the chapter folders as a reference while learning.
5. For Playwright examples, run commands from inside `chapter_19_playwright_Basics/`.
6. Practice by modifying the examples and experimenting.

## Running Playwright Tests

From inside `chapter_19_playwright_Basics/`:

```bash
npm test
npm run test:tta-cart
npx playwright test tests/example.spec.ts
```

This project is intended for learning and practice purposes, and it currently covers JavaScript fundamentals, Playwright basics, export/import patterns, and OOPS fundamentals.
