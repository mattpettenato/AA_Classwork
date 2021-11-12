import * as APIUtil from '../util/api_util.js'

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const REQUEST_ALL_POKEMON = 'REQUEST_ALL_POKEMON';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

