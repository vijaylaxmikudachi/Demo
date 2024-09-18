

function* iterator(){
    const x = yield "First yield";
    console.log(x); 
    const y = yield "Second yield";
    console.log(y);
}

const c = iterator();
console.log(c.next());  // First yield
console.log(c.next(10)); // Logs 10, then "Second yield"
console.log(c.next(20)); // Logs 20
