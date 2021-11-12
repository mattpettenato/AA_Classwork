import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { fetchTodos } from './util/todo_api_util'

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  window.store = store
  window.fetchTodos = fetchTodos;
});
