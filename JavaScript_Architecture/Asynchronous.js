console.log("Placing order for food...");

// Simulating asynchronous food preparation (e.g., cooking in the background)
function prepareFoodAsync(callback) {
    console.log("Preparing food...");
    setTimeout(() => {
        console.log("Food is ready!");
        callback();
    }, 3000); // Simulates a 3-second delay
}

prepareFoodAsync(() => {
    console.log("Eating the food.");
});

console.log("Doing other tasks while waiting for the food.");
