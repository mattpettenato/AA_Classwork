const View = require("./ttt-view.js");
window.View = View
const Game = require("./../ttt_node/game.js");
window.Game = Game




document.addEventListener("DOMContentLoaded", () => {
  const figure = document.getElementById('ttt');
  const game = new Game();
  const root = document.getElementsByClassName('ttt')[0];
  new View(game, root); 
});

