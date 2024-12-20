/*A closure is a function that "remembers" the variables from its lexical scope even after the outer function has finished executing. In other words, a closure gives you access to an outer function's variables from an inner function, even after the outer function has returned. */
function outerFunction() {
    let outerVariable = "I am from outer scope";

    function innerFunction() {
        console.log(outerVariable); 
    }

    return innerFunction;
}

const myClosure = outerFunction(); 
myClosure();
