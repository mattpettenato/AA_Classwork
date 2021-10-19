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

// console.log(test.uniq());
//console.log([1, 2, 2, 3, 3, 3].uniq());

// const test2 = new Array([1, 0, -1, 2, 3, -2]) // expecting [[0, 2],[3,5]]
Array.prototype.twoSum = function () {
  let pairs = [];
  for (let i = 0; i < this.arr.length; i++) {
    for (let j = (i + 1); j < this.arr.length; j++) {
      if (this.arr[i] + this.arr[j] === 0) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs;
}
// console.log(test2.twoSum());

const test3 = new Array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) // 
Array.prototype.transpose = function (){
  let newArr = [];
  for (let i = 0; i < this.arr.length; i++) {
    let subArr = [];
    for (let j = 0; j < this.arr.length; j++) {
      subArr.push(this.arr[j][i]);
    }
    newArr.push(subArr);
  }
  return newArr;
}

console.log(test3.transpose());

