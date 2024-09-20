/**
 * generators are special types of functions that allow you to pause and resume execution. 
 * generators can yield multiple values over time, 
 * making them useful for iterating over sequences or managing asynchronous operations.
 */
function* count(){
        yield 2;
        yield 4;
        yield 6;
        yield 8; 
}
 const even = count();
 for(let v of even){
    console.log(v);
 }

 //ex-2
 function* iterator() {
    yield 1;
    yield 2;
    yield 3;
}
const gen = iterator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
