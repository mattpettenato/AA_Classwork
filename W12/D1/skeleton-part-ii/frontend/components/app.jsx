import { Route } from "react-router";
import React from "react";
// import { HashRouter } from "react-router-dom";
import PokemonIndexContainer from './pokemon/pokemon_index_container'

const App = () => (
  <Route path="/" component={PokemonIndexContainer} />
)

export default App;

// const Root = () => (
//   <HashRouter>
//     <App />
//   </HashRouter>
// )