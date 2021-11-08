import React from 'react';
import Tile from './tile'
import ReactDOM, { render } from 'react-dom';
import * as Minesweeper from '../minesweeper';

export default class Board extends React.Component {
  constructor(props){
    super(props);
    // this.state =[]
    this.updateGame = this.props.updateGame.bind(this);
  }


  render() {
    return this.props.board.grid.map((row, i) => {
      return (
        <div >
          <ul className="tile9">
             {row.map((ele, j) => {
               return <li key={[i,j]}>
                <Tile  updateGame = {this.updateGame}/>
                    </li>
            })
            } 
          </ul>
        </div>
      );
    })
  }
}

