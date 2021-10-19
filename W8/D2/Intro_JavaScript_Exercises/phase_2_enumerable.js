const test = [1, 2, 3, 4] // [1, 4, 9, 16]

function myEach(el, cb) {
  let arr = []
  for (let i = 0; i < el.length; i++) {
      arr.push(cb(el[i])); 
  }
  console.log(arr);
}

function cb(el) {
  return el * el;
}

myEach(test, cb);