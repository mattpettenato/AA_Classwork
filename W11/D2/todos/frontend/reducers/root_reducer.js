import todosReducer from "./todos_reducer";
import configureStore from '../store/store';
import { combineReducers } from "redux";


// dispatch will pass in state slices and action for us
const rootReducer = combineReducers({
  todos: todosReducer
})

export default rootReducer;