
//var
console.log(greet);
greet();
console.log(x);
var x ;
function greet(){
    console.log("Namaste!");
}
console.log(x);

//let and const

console.log(a);
let a = 7;

console.log(b);
const b = 7;

//Function expressions
func(); // TypeError: bar is not a function

var func = function() {
    console.log("This is a function expression.");
};

//class hoisting
const obj = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {
    constructor() {
        this.name = 'JavaScript';
    }
}
