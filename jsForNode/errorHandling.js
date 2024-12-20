//1. The try...catch Statement
try {
    const result = 10 / 0;
    console.log(result);
    console.log(undefinedVariable); 
} catch (error) {
    console.error("An error occurred:", error.message); 
} finally {
    console.log("Execution complete!"); 
}
//2. Throwing Custom Errors
console.log("Throwing Custom Errors");
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed!");
    }
    return a / b;
}

try {
    console.log(divide(10, 0)); 
} catch (error) {
    console.error("Error:", error.message);
}

/*3. Error Object:
When an error occurs, JavaScript creates an error object containing:
message: Description of the error.
name: Type of error (e.g., TypeError, ReferenceError).
stack: Stack trace showing where the error occurred. */

console.log("Error Objcet");

try {
    nonExistentFunction();
} catch (error) {
    console.log("Name:", error.name); 
    console.log("Message:", error.message); 
    console.log("Stack:", error.stack); 
}
/*4. finally Block
The finally block runs after try and catch, regardless of whether an error occurred. */
function process() {
    try {
        console.log("Trying to process...");
        throw new Error("Processing failed!");
    } catch (error) {
        console.error("Error caught:", error.message);
    } finally {
        console.log("Cleanup actions executed.");
    }
}

process();

/*5. Nested try...catch Blocks
You can nest try...catch blocks to handle specific errors in different parts of your code. */
try {
    try {
        throw new Error("Inner error!");
    } catch (innerError) {
        console.error("Caught inner error:", innerError.message);
        throw new Error("Outer error!"); 
    }
} catch (outerError) {
    console.error("Caught outer error:", outerError.message);
}
/*3. Custom Error Classes
You can create custom error classes for better error handling. */
class CustomError extends Error {
    constructor(message, code) {
        super(message);
        this.name = "CustomError";
        this.code = code;
    }
}

try {
    throw new CustomError("Something went wrong!", 404);
} catch (error) {
    console.error(`${error.name} (${error.code}): ${error.message}`);
}
