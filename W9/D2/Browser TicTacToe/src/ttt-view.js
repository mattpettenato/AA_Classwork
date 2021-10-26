const Game = require("../ttt_node/game");

class View {
  constructor(game, el) {
    this.game = new Game();
    this.el = document.getElementsByTagName('ul');
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
    document.body.appendChild(ele);
  };
  
  bindEvents() {
    this.el.addEventListener('click', this.handleClick(this.el));
  }


  //our callback that gets called when our eventListener get triggered.
  handleClick(e) {
    let click = e.target; 
    this.makeMove(click);
  }

  makeMove(square) {
    //put current players mark on square 
    //Game.currentPlayer gives us the current player 

   let currentPlayer = Game.currentPlayer; //gives back a mark 
   //if the move is invalid, do nothing, have another turn 
    try {
      Game.prototype.playMove([square.getAttribute('data-row'), square.getAttribute('data-column')]);
      square.appendChild(document.createTextNode(Game.currentPlayer)); 
    }
    catch(square){
      throw new Error("Invalid Move"); 
    }
    
  
  }

}

module.exports = View;
