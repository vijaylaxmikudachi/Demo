console.log("Placing order for food...");

// Simulating a time-consuming task
function prepareFood() {
    for (let i = 0; i < 1000000000; i++) {} // This loop simulates a time-consuming task
    console.log("Food is ready!");
}

prepareFood(); // This blocks the code

console.log("Eating the food.");
