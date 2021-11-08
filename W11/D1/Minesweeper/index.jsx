import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';
import Minesweeper from './minesweeper'

function Root() {
  return (
    <div className="root">
      <Game />
    </div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("root");
  ReactDOM.render(<Root />, main);
});