export const RECEIVE_TODOS = 'RECEIVE_TODOS'; //throws errors on type
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos) => ({
  
    type: RECEIVE_TODOS,
    todos // an array of todos
  
})

export const receiveTodo = (todo) => ({
  
    type: RECEIVE_TODO,
    todo
  
})

// const newTodos = [{ id: 1, title: 'test1', body: 'testbody1', done: false }, { id: 2, title: 'test2', body: 'testbody2', done: true }];
// store.getState(); // should return default state object
// store.dispatch(receiveTodo({ id: 3, title: "New Todo" }));
// store.getState(); // should include the newly added todo
// store.dispatch(receiveTodos(newTodos));
// store.getState(); // should return only the new todos