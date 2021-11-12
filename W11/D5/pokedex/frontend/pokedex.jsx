import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from './util/api_util.js'
import { receiveAllPokemon } from './actions/pokemon_actions'
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store = configureStore();
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch
});