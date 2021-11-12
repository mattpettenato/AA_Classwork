import React from "react";
import ReactDOM from "react-dom";

export const allTodos = (state = {}) => {
  // console.log(allTodos)
  return Object.values(state.todos)
}
