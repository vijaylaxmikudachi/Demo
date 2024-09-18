/*Immediately Invoked Function Expression (IIFE) in JavaScript is a function 
that is executed right after it is defined. 
This pattern is useful for avoiding polluting the global scope and for creating private scopes.*/
//Useful for database connectivity


(function (){
    console.log(`DB connected`);
})();
//Arrow func
(() => {
    console.log(`DB two`);
})();

//Parameterized

((name) => {
    console.log(`${name}`);
})(`vijaylaxmi`);

