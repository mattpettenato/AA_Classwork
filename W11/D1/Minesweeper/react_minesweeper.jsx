import Game from './components/game';
import React from 'react';
import ReactDOM from 'react-dom';
import Tile from './components/tile'
import Minesweeper from './minesweeper'

function Root() {
  return (
    <div className="root">
      <Game />
    </div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  ReactDOM.render(<Root />, main);
});
