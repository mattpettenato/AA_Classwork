import React from 'react';
import ReactDOM from 'react-dom';
import * as Minesweeper from '../minesweeper';


export default class Game extends React.Component{
    constructor(props) {
      super(props);
      this.board = new Minesweeper.Board(9, 30);
      this.state = { board: this.board };
    }

    render() {

      return this.board.grid.map((row, i) => {
          row.map((col, j) => {
          return ( <h1> hello </h1>
            );
        })
      })
  }
}