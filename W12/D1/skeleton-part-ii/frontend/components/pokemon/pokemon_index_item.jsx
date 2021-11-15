import React from "react";
import { Link } from "react-router-dom";

class PokemonIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const {pokemon} = this.props;
    return (
      <li className="pokemon-index-item">
        <span>{pokemon.id}</span>
        <img src={pokemon.imageUrl} />
        <span>{pokemon.name}</span>
      </li>
    )
  }
}

export default PokemonIndexItem;

