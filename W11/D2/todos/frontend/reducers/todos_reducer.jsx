import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';
import configureStore from '../store/store';


// default
const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state={}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_TODOS:
      console.log("hello")
      action.todos.forEach( ele => {
        nextState[ele.id] = ele 
      })
      return nextState;
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
    default:
      return state;
  }

}
export default todosReducer;
