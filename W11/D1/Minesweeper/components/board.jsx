import React from 'react';
import Tile from './tile'
import ReactDOM, { render } from 'react-dom';
import * as Minesweeper from '../minesweeper';

export default class Board extends React.Component {
  constructor(props){
    super(props);
    // this.state =[]
  }

  render() {
    return this.props.board.grid.map((row, i) => {
      return (
        <div >
          <ul className="tile9">

            <li>
              <Tile key = {i} />
            </li>
            <li>
              <Tile key={i} />
            </li>
            <li>
              <Tile key={i} />
            </li>
            <li>
              <Tile key={i} />
            </li>
            <li>
              <Tile key={i} />
            </li>
            <li>
              <Tile key={i} />
            </li>
            <li>
              <Tile key={i} />
            </li>
            <li>
              <Tile key={i} />
            </li>
            <li>
              <Tile key={i} />
            </li>
          </ul>

        </div>
      );
    })
  }
}

