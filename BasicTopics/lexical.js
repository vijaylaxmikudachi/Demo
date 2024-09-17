function outerFunction() {
    const outerVariable = 'I am from the outer function';

    function innerFunction() {
        const innerVariable = 'I am from the inner function';
        console.log(outerVariable);  // Accessing outer scope variable
        console.log(innerVariable);  // Accessing inner scope variable
    }

    innerFunction(); // Call the inner function
}

outerFunction();  // Output: "I am from the outer function", "I am from the inner function"

//Lexical scope chain
const globalVariable = 'I am global';

function outer() {
    const outerVariable1 = 'I am outer';

    function inner() {
        const innerVariable1 = 'I am inner';
        console.log(innerVariable1);   // Output: 'I am inner' (from inner scope)
        console.log(outerVariable1);   // Output: 'I am outer' (from outer scope)
        console.log(globalVariable);  // Output: 'I am global' (from global scope)
    }

    inner();
}

outer();

//Incrementing
function createCounter() {
    let count = 0;  // Lexical scope variable

    return function() {  // Inner function (closure)
        count++;  // Accessing outer function's variable
        return count;
    };
}

const counter = createCounter();  // The outer function is called
console.log(counter());  // Output: 1
console.log(counter());  // Output: 2
console.log(counter());  // Output: 3
