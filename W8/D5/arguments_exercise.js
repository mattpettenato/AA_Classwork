function sum1(prev, curr) {
  return prev + curr
}

function sum() {
  let args = Array.from(arguments);
  return args.reduce((prev, curr) => prev + curr)
}

console.log(sum(1, 2, 3, 4));

function sum2(...args){
  return args.reduce((prev, curr) => prev + curr)
}

console.log(sum2(1, 2, 3, 4));





Function.prototype.myBind1 = function(ctx){
  let func = this;
  console.log(arguments);
  let bindArgs = Array.from(arguments).slice(1);
  return function(){
    console.log(arguments);
    let callArgs = Array.from(arguments);
    return func.apply(ctx, bindArgs.concat(callArgs));
  }
}

Function.prototype.myBind = function(ctx, ...args){
  let func = this;
  let bindArgs = args;
  return function(...args){
    return func.apply(ctx, bindArgs.concat(args));
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true