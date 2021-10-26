const Game = require("../ttt_node/game");

class View {
  constructor(game, el) {
    this.game = new Game();
    this.el = document.getElementById('ttt');
  }

  setupBoard() {
    let ele = document.createElement("ul");
    // let body = document.getElementsByTagName('body')
    let t = document.createTextNode("text");
    ele.appendChild(t)
    document.body.appendChild(ele);
  };
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
