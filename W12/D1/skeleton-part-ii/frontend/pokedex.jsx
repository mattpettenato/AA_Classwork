import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchAllPokemon} from './util/api_util'
import {receiveAllPokemon, receiveOnePokemon, requestAllPokemon, requestOnePokemon} from './actions/pokemon_actions'



document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById("root");
  const store = configureStore();
  ReactDOM.render(<Root store={store} />, rootEl)
  window.getState = store.getState();
  window.fetchAllPokemon = fetchAllPokemon;
  window.dispatch = store.dispatch;
  window.receiveAllPokemon = receiveAllPokemon;
  window.receiveOnePokemon = receiveOnePokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.requestOnePokemon = requestOnePokemon;

})