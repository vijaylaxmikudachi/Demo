//1. Promise example
let promise = new Promise((resolve, reject) => {
    let success = true; // You can change this to false to see the rejection
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected.");
    }
});

promise.then((message) => {
    console.log(message);  // Runs if the promise is resolved
}).catch((error) => {
    console.log(error);    // Runs if the promise is rejected
});

//2.Asynchronous Operation with setTimeout
function asyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task completed after 2 seconds");
        }, 2000);
    });
}

asyncTask().then((message) => {
    console.log(message);  // Logs after 2 seconds
});

//3.Promise with reject and catch

function fetchData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject("Failed to fetch data");
            }
        }, 1500);
    });
}

fetchData(false).then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);  // Logs if the promise is rejected
});

//4.chaining Promises
function taskOne() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task 1 complete"), 1000);
    });
}

function taskTwo() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task 2 complete"), 1000);
    });
}

taskOne()
    .then((result) => {
        console.log(result);
        return taskTwo();  // Return a new promise to chain the next task
    })
    .then((result) => {
        console.log(result);
    });

    //5.Promise.all for parallel execution

    let promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), 1000));
    let promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), 2000));
    let promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolved"), 1500));

    Promise.all([promise1, promise2, promise3]).then((results) => {
    console.log(results);  // Logs an array with all the resolved values
    }).catch((error) => {
    console.error("One of the promises failed: ", error);
    });
