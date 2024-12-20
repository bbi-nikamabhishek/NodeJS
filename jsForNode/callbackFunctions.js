/*A callback function is a function that is passed as an argument to another function and is executed after some operation is completed. Callback functions allow asynchronous execution, enabling JavaScript to handle time-consuming tasks without blocking the main thread.
 */
function doSomething(callback) {
    console.log("Doing something...");
    callback(); // Execute the callback function
}

function sayHello() {
    console.log("Hello, World!");
}

doSomething(sayHello);

console.log("---------------------------------");
/*
1. Synchronous Callbacks
A synchronous callback is executed immediately after the function that contains it completes.
*/
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function goodbye() {
    console.log("Goodbye!");
}

greet("Alice", goodbye);

console.log("-------------------------------------------");
/*2. Asynchronous Callbacks
Asynchronous callbacks are executed after a certain task is completed, such as fetching data from a server or reading a file. */
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        console.log("Data fetched!");
        callback("Sample Data");
    }, 2000); 
}

function processData(data) {
    console.log("Processing:", data);
}

fetchData(processData);

/*3. Callbacks in Array Methods
Many JavaScript array methods use callbacks, such as map(), filter(), and forEach(). */
console.log("---------------------");

const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map((number) => number * number);
console.log(squared); 

