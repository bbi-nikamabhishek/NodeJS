/*ES6 modules are a feature of JavaScript that allow you to organize your code into smaller, reusable pieces. They use import and export statements to define and include functionality across files.
 */
/*Key Features of ES6 Modules
File-Based:
Each file is a separate module.
Explicit Export and Import:
You need to explicitly export variables, functions, or classes from a module and import them where needed.
Strict Mode:
Modules always operate in strict mode ('use strict'; is implicit).
Single Instance:
A module is evaluated only once, and the same instance is shared across all imports.
Static Structure:
Imports and exports are statically analyzed, meaning they must be declared at the top level.
 */

/*Exporting from a Module
There are two ways to export code in ES6 modules:

Named Exports:

Export multiple values from a module.
Use export before declarations or separately.
Default Exports:

Export a single default value from a module.
Use export default. */
// file: mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;



