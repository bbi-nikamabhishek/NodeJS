/*
Hoisting is JavaScript's default behavior of moving variable, function, or class declarations to the top of their scope before code execution. This means you can use variables or functions in your code before they are declared.

Variables:
For var declarations, the variable is hoisted, but its value is not initialized until the line of assignment is reached.
For let and const, the variable is hoisted but remains in a "temporal dead zone" until the line of declaration is executed.

Functions:
Function declarations are fully hoisted, meaning the entire function is available before it is declared.
Function expressions are hoisted only as variables (not the actual function body).
*/

console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10

// ReferenceError: Cannot access 'b' before initialization
console.log(b); 
let b = 20;

greet(); // Output: Hello, World!
function greet() {
    console.log("Hello, World!");
}

sayHello(); // TypeError: sayHello is not a function
var sayHello = function () {
    console.log("Hello, World!");
};

/*
The Temporal Dead Zone is the time between the hoisting of a variable and when it is declared in the code. During this time, accessing the variable throws a ReferenceError.
*/
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;
