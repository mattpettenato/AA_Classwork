import { connect } from 'react-redux';
import { requestOnePokemon } from './../../actions/pokemon_actions';
import { selectAllPokemon } from './../../reducers/selectors';
import PokemonIndex from './pokemon_index';

const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestOnePokemon: () => dispatch(requestOnePokemon(ownProps.match.params.pokemonId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex)