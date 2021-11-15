import React from 'react'
import { Route } from "react-router-dom";
import PokemonIndexContainer from './pokemon/pokemon_index_container';

const App = (props) => {
  return (<Route path="/" component={PokemonIndexContainer}/>)
}

export default App