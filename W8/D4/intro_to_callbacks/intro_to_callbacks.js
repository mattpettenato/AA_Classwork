class Clock {
  constructor() {
    // 1. Create a Date object.
    const currentTime = new Date();
    
    // 2. Store the hours, minutes, and seconds.
    this.hours = currentTime.getHours();
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();

    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
    // setInterval(this._tick, 1000);
    // setInterval(function () { this._tick(); }, 1000)
  }

  printTime() {
    // Format the time in HH:MM:SS
    let time = `${this.hours}:${this.minutes}:${this.seconds}`;
    // Use console.log to print it.
    console.log(time);
  }

  _tick() {
    // 1. Increment the time by one second.
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes += 1;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours += 1;
    }
    if (this.hours === 24) {
      this.hours = 0;
    }
    // 2. Call printTime.
    // console.log(this);
    this.printTime();
  }
}

//const { ReadStream } = require("fs");
// const clock = new Clock();

// addNumbers

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0){
    rl.question("Enter a number: ", answer => {
      sum += parseInt(answer);
      console.log(sum);
      // numsLeft -= 1
      addNumbers(sum, numsLeft - 1, completionCallback)
    });
  } else {
    completionCallback(sum);
    rl.close();
  }
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));



// absurdBubbleSort

// const readline = require("readline");

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  reader.question(`Is ${el1} > ${el2}? `, answer => {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  })
  // callback if true; else false.
}

// askIfGreaterThan(1, 2, function (answer) {
//   console.log(`${answer}`);
//   reader.close();})

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  if (i === (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps)
  } else { 
    askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    })
  }
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
  
}

// function outerBubbleSortLoop(madeAnySwaps) {
//   // Begin an inner loop if you made any swaps. Otherwise, call
//   // `sortCompletionCallback`.
//   if (madeAnySwaps === true) {
//     innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
//   } else {
//     sortCompletionCallback(arr);
//   }
// }

// innerBubbleSortLoop([2, 1, 3], 0, false, outerBubbleSortLoop)
// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      reader.close();
      sortCompletionCallback(arr);
    
    }
    
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true)
}

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });


//Function Calling

//1
Function.prototype.myBind = (context) => {
  return () => this.apply(context);
};

//2
Function.prototype.myBind = function(context) {
  return () => this.apply(context);
}


class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"
// // console.log(turnOn);


