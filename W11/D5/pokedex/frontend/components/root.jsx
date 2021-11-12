import React from 'react';
import { Provider } from 'react-redux';
// import {PokemonIndex} from './pokemon/pokemon_index';
import PokemonIndexContainer from './pokemon/pokemon_index_container'

const Root = ({ store }) => (
  <Provider store={store}>
    <PokemonIndexContainer />
  </Provider>
);

export default Root;