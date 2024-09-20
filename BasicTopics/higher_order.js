//Example1
function salary(num){
    return num*0.7;
}
setTimeout(salary,3000);

const mysalaries = [50,40,60,20,300,400];
mysalaries.filter(n => n >50);

//Example2
function x(){
    console.log("Namaste!");
}
function y(){
    x();
}

//Example3
const radius = [3,2,1,5];
const area = function (radius){ return Math.PI*radius*radius};
const cf = function (radius){ return 2*Math.PI*radius};
const dia = function (radius){ return 2*radius};

const calculate = function(radius,logic){
    const op = [];
    for (let i=0;i<radius.length;i++){
        op.push(logic(radius[i]));
    }
    return op;
}
console.log(calculate(radius,area));
console.log(calculate(radius,cf));
console.log(calculate(radius,dia));
