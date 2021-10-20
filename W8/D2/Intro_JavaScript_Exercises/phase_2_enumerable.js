const test = [1, 2, 3, 4] // [1, 4, 9, 16]

Array.prototype.myEach = function(cb) {
  for (let i = 0; i < this.length; i++){
    cb(this[i]);
  }
}

// function myEach(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//       cb(arr[i]); 
//   }
// }

function cb(el) {
  return el * el;
  //console.log(el * el)
}

console.log([1, 2, 3, 4].myEach(cb));

Array.prototype.myMap = function(cb) {
  let arr = [];
  this.myEach(ele => arr.push(cb(ele)));
  return arr
}
console.log([1, 2, 3, 4].myMap(el => {return (el * el)});




// myEach(test, cb);

// function myMap(arr, cb) {
//   //const test = [1, 2, 3, 4];
//   const answer = [];

//   return function(cb){
//     answer.push(myEach(arr, cb));
//   }
//   return answer;
// }

// console.log(myMap([1, 2, 3, 4]));