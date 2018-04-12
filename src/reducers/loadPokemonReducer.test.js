import loadPokemonReducer from './loadPokemonReducer';
import * as actions from '../actions';

describe('loadPokemonReducer', () => {
  it('should return state by default', () => {
    expect(loadPokemonReducer(undefined, {})).toEqual([]);
  });

  it('should update the state tree with payload', () => {
    const pokemon = [{id: 17, name: 'Bulbasauer'}];

    const loadPokemonAction = actions.loadPokemon(pokemon);
    const actual = loadPokemonReducer(undefined, loadPokemonAction);
    const expected = pokemon;

    expect(actual).toEqual(expected);
  })
})
