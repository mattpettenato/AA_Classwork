import React from 'react';
import { Provider } from 'react-redux';
// import {PokemonIndex} from './pokemon/pokemon_index';
import PokemonIndexContainer from './pokemon/pokemon_index_container'
import { HashRouter } from "react-router-dom";

const Root = ({ store }) => (
  <Provider store={store}>
    {/* <PokemonIndexContainer /> */}
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;