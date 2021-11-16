import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from "../actions/pokemon_actions";

const movesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      return action.poke.moves
    default:
      return state;
  }
}
export default movesReducer;
