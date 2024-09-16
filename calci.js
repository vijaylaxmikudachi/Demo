function add(a, b) {
    return a + b;
}

console.log(add(10,5));

function subtract(a, b) {
    return a - b;
}

console.log(subtract(10,5));

function multiply(a, b) {
    return a * b;
}
console.log(multiply(10,5));

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
}
console.log(divide(10,5));
