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
    // console.log(this.props)
    const pokemon = Object.values(this.props.pokemon)
    return (
      <table className="pokemon-ul">
        <tbody>

        {this.props.pokemon.map(pokeman => <PokemonIndexItem pokeman={pokeman} key={Math.random()}/>)}
        </tbody>
      </table>
    )
  }
}
export default PokemonIndex