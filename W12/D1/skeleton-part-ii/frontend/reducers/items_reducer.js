import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from './../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type){
    case RECEIVE_ONE_POKEMON:
      return action.poke.items
      // nextState[action.poke.id] = action.poke.items
      // return nextState
    default:
      return state;
  }
}

export default itemsReducer;