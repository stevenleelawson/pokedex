import loadPokemonTypesReducer from './loadPokemonTypesReducer';
import * as actions from '../actions';

describe('loadPokemonTypesReducer', () => {
  it('should return state by default', () => {
    expect(loadPokemonTypesReducer(undefined, {})).toEqual([])
  });

  it('should update the state tree with payload', () => {
    const pokemonType = [{id: 1, name: 'fighting'}]

    const loadPokemonTypesAction = actions.loadPokemonTypes(pokemonType);
    const actual = loadPokemonTypesReducer(undefined, loadPokemonTypesAction)
    const expected = pokemonType;

    expect(actual).toEqual(expected);
  });
});
