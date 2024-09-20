function multiply(num){
    return num*5;
}
multiply.power = 2;
console.log(multiply(5));//25
console.log(multiply.power);//2
console.log(multiply.prototype);//{}

function create(n,score){
        this.n = n;
        this.score = score;
}
create.prototype.increment = function () {
                                            score++;
                                            }

  const a = new create ("a",20);
  const t = new create ("t",25);
create.prototype.print = function (){
    console.log(`print is ${this.n}`)
}

a.print();


