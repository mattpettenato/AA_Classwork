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