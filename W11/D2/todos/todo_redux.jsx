import React from "react";
import ReactDOM from "react-dom";
import configureStore from '../todos/frontend/store/store';
import * as todo_actions from '../todos/frontend/actions/todo_actions';
import Root from './frontend/components/root';
import { allTodos } from './frontend/reducers/selectors'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  const preloadedState = { todos: [{ id: "1", title: 'one' }, { id: "2", title: 'two' }, { id: "3", title: 'three' }, { id: "4", title: 'four' }] };
  const store = configureStore(preloadedState); // createStore
  window.store = store;
  window.receiveTodo = todo_actions.receiveTodo;
  window.receiveTodos = todo_actions.receiveTodos;
  window.allTodos = allTodos;
  // debugger;
  ReactDOM.render(<Root store={store}/>, root);
  // ReactDOM.render(<h1>Todos App</h1>, root);
})

