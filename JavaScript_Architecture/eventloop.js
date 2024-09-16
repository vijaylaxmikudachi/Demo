//1.Examples
console.log("Start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

console.log("End");

//2.with promise obj
console.log("start");

setTimeout( () => {
                    console.log("Callback Timer")
},5000);


Promise.resolve().then ( () => {
                                    console.log("Micro task -->Promise call back")   
});

console.log("End");

//3.With delays
console.log("Start");

setTimeout(() => {
    console.log("First Timeout (1000ms)");
}, 1000);

setTimeout(() => {
    console.log("Second Timeout (0ms)");
}, 0);

console.log("End");

//4.Recursive
function loop() {
    console.log("Task");
    setTimeout(loop, 1000);  // This schedules the next task without blocking
}

console.log("Start");
loop();  // Starts the recursive loop
console.log("End");

//5.SetImmediate
const fs = require('fs');

console.log("Start");

fs.readFile(__filename, () => {
    console.log("File read complete");

    setTimeout(() => {
        console.log("Timeout callback");
    }, 0);

    setImmediate(() => {
        console.log("Immediate callback");
    });
});

console.log("End");
