import React from "react"
import PokemonIndexItem from "./pokemon_index_item"


class PokemonIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestAllPokemon
  }

  render(){
    console.log(this.props)
    const pokemon = Object.values(this.props.pokemon)
    return (
      <ul className="pokemon-ul">
        {/* {pokemon.map((pokeman) => (
          <li key={pokeman.id}>
            {pokeman.name}
            <img src={pokeman.img_url}/>
          </li>
        ))} */}
        {this.props.pokemon.map(pokeman => <PokemonIndexItem pokeman={pokeman} key={Math.random()}/>)}
      </ul>
    )
  }
}
export default PokemonIndex