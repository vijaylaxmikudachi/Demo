
//Example1
function outerFunction() {
    let outerVariable = "I'm outside!";

    function innerFunction() {
        console.log(outerVariable); // Can access outerVariable even though outerFunction has returned
    }

    return innerFunction;
}

const closureExample = outerFunction();
closureExample();  // Output: "I'm outside!"

//Example2
function init(){
    var name = "Chrome";
    function display(){
        console.log(name);
    }
    return display;
}
const c = init();
c();

//Example3
function returnfunc(){
    const x = () => {
                        let a =1;
                        console.log(a);
    const y = () => {
                        let a =2;
                        console.log(a);
    const z = () => {
                        let a =3;
                        console.log(a);
    }
    z();
    }
    y();
    }
    return x;
}
let a = returnfunc();
a();
