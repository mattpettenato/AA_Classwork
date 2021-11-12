import * as TodoApiUtil from '../util/todo_api_util'

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TODO_ERROR = 'TODO_ERROR';

export const fetchTodos = () => {
  console.log(TodoApiUtil.fetchTodos())
  return(dispatch, getState) => {
    return TodoApiUtil.fetchTodos()
      .then(todosArr => dispatch(receiveTodos(todosArr)))
  }
}

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos,
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo,
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo,
});

export const todoError = error => ({
  type: TODO_ERROR,
  error,
});
