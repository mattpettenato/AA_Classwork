const Game = require("../ttt_node/game");

class View {
  constructor(game, el) {
    this.game = new Game();
    this.el = el;
    this.setupBoard();
    
    this.handleClick = this.handleClick.bind(this);
    this.bindEvents();
  }

  setupBoard() {
    //build a 3 x 3 grid using unordered list, with li elements 
    //need to store li positions? 
    
    let ele = document.createElement("ul");
    let li = document.createElement('li')

    for (let i = 0; i < 9; i++) {
      //creates element and sets its parent 
      li = document.createElement('li')
      ele.appendChild(li); 

      //adding text to each li element 
      // li.appendChild(document.createTextNode("X")); 

      //sets row index
      li.setAttribute('data-row', (i % 3));
      //sets col index
      li.setAttribute('data-column', Math.floor((i)/3));
    }
    this.el.appendChild(ele);
  };
  
  bindEvents() {
    console.log(this)
    this.el.addEventListener('click', this.handleClick);

  }


  //our callback that gets called when our eventListener get triggered.
  handleClick(e) {
    console.log(e.target);
    let click = e.target; 
    // this.makeMove(click);
    if (click.nodeName === 'LI') this.makeMove(click);
  }

  makeMove(square, isNotPlayer) {
    //put current players mark on square 
    //Game.currentPlayer gives us the current player 
    console.log(isNotPlayer)
    if (isNotPlayer) {
      var currentPlayer = 'z'
    } else {
      var currentPlayer = this.game.currentPlayer;
    }

  //  let currentPlayer = this.game.currentPlayer; //gives back a mark 
   //if the move is invalid, do nothing, have another turn 
    console.log(currentPlayer === this.game.currentPlayer);
    try {
      console.log(currentPlayer === this.game.currentPlayer);
      this.game.playMove([square.getAttribute('data-row'), square.getAttribute('data-column')]);

      if (currentPlayer === 'x') {
        square.classList.add('xstyle');
        square.appendChild(document.createTextNode(currentPlayer));
      } else if (currentPlayer === 'o'){
        square.classList.add('ostyle')
        square.appendChild(document.createTextNode(currentPlayer));
      } else {
        square.classList.add('zstyle')
      }
      // square.appendChild(document.createTextNode(currentPlayer));
    }
    catch(square){
      throw new Error("Invalid Move"); 
    } 

    if (!(isNotPlayer)) {let winner = this.isWinner();
      if (winner) {
        let that = this
        setTimeout(function () { that.showWinner(that) }, 0.25 * 1000)
      }
    }
  }

  isWinner() {
    if (this.game.isOver()) {
      if (this.game.board.winner()) {
        return this.game.board.winner();
      } else {
        return 'draw'
      }
    } else {
      return 0
    }
  }

  showWinner(that){

    // return process.exit(1)
  // throw new Error("WINNER")
    window.alert("WINNER");
    that.fillBoard(that);
  }

  fillBoard(that) {
    const posBoard = [
      // horizontals
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]]
    ];
    // for (let i = 0; i < 3; i++){
    //   for (let j = 0; j < 3; j++){
        console.log(that.el)
        var q = that.el.querySelectorAll("li")
        for (let k = 0; k < 9; k++){
          if (!(q[k].classList.length > 0)) {
            that.makeMove(q[k], true)
          }
        }
    //   }
    // }
  }

}

module.exports = View;
