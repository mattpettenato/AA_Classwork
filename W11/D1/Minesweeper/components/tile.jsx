import React from 'react';
import ReactDOM from 'react-dom';
import * as Minesweeper from '../minesweeper';

export default class Tile extends React.Component{
  constructor(props) {
    super(props);
    this.explored = this.props.value.explored;
    this.bombed = this.props.value.bombed;
    this.flagged = this.props.value.flagged;
  }

  revealTile(){
    this.explored = true; 
  }

  render(){
    return (
    <button classname = "tile-details" onClick = {this.revealTile}>{console.log(this.props.value)}</button>
    )
  }
}