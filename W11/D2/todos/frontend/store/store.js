import { createStore } from "redux";
import rootReducer from "../reducers/root_reducer";

const configureStore = (preloadedState={}) => {
  return createStore(rootReducer, preloadedState);
} // obj accesses state and runs stuff in rootreducer

export default configureStore;