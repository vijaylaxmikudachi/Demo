//The call() method invokes a function with a given this value and individual arguments.

function display(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}

const person = { name: 'vijaylaxmi' };

// Using call() to invoke the function
display.call(person, 'Hello', '!');//Hello,vijaylaxmi!

//other function
const person1 = { name: 'vijaylaxmi' };
const person2 = { name: 'gouri' };

function sayHi() {
    console.log(`Hi, I'm ${this.name}`);
}

sayHi.call(person1); // Hi, I'm vijaylaxmi
sayHi.call(person2); // Hi, I'm gouri



