//1. Async Example

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
}

async function displayData() {
    console.log("Fetching data...");
    const data = await fetchData();
    console.log(data); // This runs after the promise is resolved
}

displayData();

//2.Handling Errors
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error fetching data");
        }, 2000);
    });
}

async function displayData() {
    try {
        console.log("Fetching data...");
        const data = await fetchData();  // This will throw an error
        console.log(data);  // Won't run because an error is thrown
    } catch (error) {
        console.error(error);  // Catches the error from the rejected promise
    }
}

displayData();

//3.chaining with multiple promises
function firstTask() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("First task complete"), 1000);
    });
}

function secondTask() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Second task complete"), 2000);
    });
}

async function runTasks() {
    const result1 = await firstTask();
    console.log(result1);  // Logs after 1 second

    const result2 = await secondTask();
    console.log(result2);  // Logs after 2 more seconds
}

runTasks();

//4.Using Promise.all
function taskOne() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task One"), 1000);
    });
}

function taskTwo() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task Two"), 2000);
    });
}

async function runParallelTasks() {
    const [resultOne, resultTwo] = await Promise.all([taskOne(), taskTwo()]);
    console.log(resultOne);  // Logs after 2 seconds
    console.log(resultTwo);  // Logs after 2 seconds
}

runParallelTasks();

//5. Async Function Always Returns a Promise

async function sayHello() {
    return "Hello, world!";
}

sayHello().then((message) => {
    console.log(message);  // Logs "Hello, world!"
});
