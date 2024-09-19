/**
 *  bind() method returns a new function where the this value is permanently bound 
 * to the provided thisArg. 
 * Unlike call() and apply(), it does not invoke the function immediately 
 * but rather returns a new function that can be invoked later.
 */
function display(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}

const person = { name: 'vijaylaxmi',
                age: 22
 };

// Using bind() to create a new function with 'this' bound to person
const boundGreet = display.bind(person, 'Hey');

// Call the new bound function
boundGreet('!');

//Example
const button = document.querySelector('button');
const person1 = { name: 'gouri' };

function showName() {
    console.log(this.name);
}

button.addEventListener('click', showName.bind(person));

