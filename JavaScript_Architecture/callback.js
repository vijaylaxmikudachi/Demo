//1. Synchronous callback
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("John", sayGoodbye);


//2. Asynchronous callback

function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        console.log("Data fetched");
        callback("Here is the data");
    }, 2000); // Simulates a 2-second delay
}

function processData(data) {
    console.log("Processing: " + data);
}

fetchData(processData);

//3. Callback in Array

let numbers = [1, 2, 3, 4];

numbers.forEach(function (number) {
    console.log("Number: " + number);
});
//4. call Back with event listners

document.getElementById("myButton").addEventListener("click", function () {
    console.log("Button clicked!");
});

//5.Call Back in Promise
function asyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task completed");
        }, 1000);
    });
}

asyncTask().then((message) => {
    console.log(message);
});
