import React from 'react';
import ReactDOM from 'react-dom';
import {fetchAllPokemon} from './util/api_util.js'
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions'
import configureStore from './store/store'
import {selectAllPokemon} from './reducers/selectors.js'
import Root from './components/root.jsx'

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  let store = configureStore();
  ReactDOM.render(<Root store={store}/>, rootEl);
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon;
});