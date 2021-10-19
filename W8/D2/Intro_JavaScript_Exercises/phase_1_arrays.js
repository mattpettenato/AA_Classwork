function Array(arr) {
  this.arr = arr;
}

const test = new Array([1, 2, 2, 3, 3, 3])

Array.prototype.uniq = function (){
  let answer = [];
  for (let i = 0; i < this.arr.length; i++) {
    if (!answer.includes(this.arr[i])){
      answer.push(this.arr[i]);
    }
  }
  return answer
}

console.log(test.uniq());
//console.log([1, 2, 2, 3, 3, 3].uniq());