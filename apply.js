//The apply() method is similar to call(), 
//but it takes an array (or array-like object) of arguments instead of listing them individually.

function greet(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}

const person = { name: 'vijaylaxmi' };

// Using apply() to invoke the function
greet.apply(person, ['Hi', '?']);//Hi,vijaylaxmi?

/**Difference
 * greet.call(person, 'Hello', '!');
 * greet.apply(person, ['Hello', '!']);
 */

//Example
const numbers = [1, 2, 3, 4, 5];
const max = Math.max.apply(null, numbers);  // 5
