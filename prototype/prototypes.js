/*
Prototype
Every JavaScript object has a prototype, which is another object 
that it inherits properties and methods from. The prototype allows objects to share properties and methods 
efficiently, rather than defining them individually for each instance.
*/
//Custom prototype

let a = {
    name: "vijaylaxmi",
    lang: 'javascript'
};
console.log(a);

let p = {
    run: () => { console.log("run"); }  
};

p.__proto__={
                name2: "hello"
};
a.__proto__ = p;
a.run();
console.log(a.name2);  

