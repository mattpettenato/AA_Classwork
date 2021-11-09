import React from 'react';
import ReactDOM from 'react-dom';
import * as Minesweeper from '../minesweeper';

export default class Tile extends React.Component{
  constructor(props) {
    super(props);
    this.explored = this.props.value.explored
    this.bombed = this.props.value.bombed
    this.flagged = this.props.value.flagged
    this.revealTile = this.revealTile.bind(this);
    this.state = {explored: this.explored, bombed: this.bombed, flagged: this.flagged}
  }

  revealTile(){
    this.explored = true; 

  }

  render(){
    let icon;
    if (this.bombed){
      icon =  '/U+1F4A3';
    } else{
      
    }
    return (
      <button className="tile-details" onClick={this.revealTile}> {'\U+23FA'} </button>
    )
  }
}