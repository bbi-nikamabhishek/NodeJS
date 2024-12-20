/*In JavaScript, scope refers to the accessibility of variables, functions, and objects in a specific part of your code. It determines where these entities can be referenced or accessed.
 */
/*Types of Scope
1. Global Scope
Variables declared in the global context are accessible throughout the program.
These variables are attached to the window object in browsers or global in Node.js. */
let globalVar = "I am global";

function displayGlobal() {
    console.log(globalVar); // Accessible here
}

displayGlobal(); // Output: I am global
console.log(globalVar); // Accessible here too

console.log("------------");
/*2. Function Scope
Variables declared with var, let, or const inside a function are scoped to that function and cannot be accessed outside of it.
Functions themselves create their own scope */

function myFunction() {
    let functionVar = "I am inside a function";
    console.log(functionVar); 
}

// myFunction();
// console.log(functionVar); 

console.log("-----------------------------");
/*3. Block Scope
Variables declared with let or const inside a block {} are scoped to that block.
var does not respect block scope; it is hoisted to the nearest function or global scope. */
if (true) {
    let blockScoped = "I am block scoped";
    console.log(blockScoped); 
}

// console.log(blockScoped); 

if (true) {
    var notBlockScoped = "I am not block scoped";
}

console.log(notBlockScoped);

/*Scope in Nested Functions
Inner functions can access variables from their outer (enclosing) functions due to lexical scope.
However, the outer function cannot access variables inside the inner function. */
function outerFunction() {
    let outerVar = "Outer";

    function innerFunction() {
        let innerVar = "Inner";
        console.log(outerVar); 
        console.log(innerVar);
    }

    innerFunction();
    console.log(innerVar); 
}

outerFunction();
 