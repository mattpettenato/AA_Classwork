import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state); // pure function, don't mutate state!!
  let nextState = Object.assign({}, state) // create copy of state
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      // nextState = action.pokemon;
      // return nextState;
      return action.pokemon;
    default:
      return state;
  }
}

export default pokemonReducer;