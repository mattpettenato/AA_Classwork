import Board from './board'
import React from 'react';
import ReactDOM from 'react-dom';
import * as Minesweeper from '../minesweeper';


export default class Game extends React.Component{
    constructor(props) {
      super(props);
      this.board = new Minesweeper.Board(9, 30);
      this.state = { board: this.board };
      this.updateGame = this.updateGame.bind(this);
    }

    render() {
      return (
        <div>
          <Board board={this.state.board}/>
        </div>
      )
  }

  updateGame(){

  }
}