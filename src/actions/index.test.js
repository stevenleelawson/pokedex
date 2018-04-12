import * as actions from './index';

describe('actions', () => {
  it('should set loadPokemonTypes', () => {
    const pokemonType = [{id: 1, name: 'fighting'}]
    const expected = {
      type: 'LOAD_POKEMON_TYPES',
      pokemonType
    }

    expect(actions.loadPokemonTypes(pokemonType)).toEqual(expected)
  })

  it('should set loadPokemon data', () => {
    const pokemon = {name: 'Bulbasaur', type: 2, weight: 103};
    const expected = {
      type: 'LOAD_POKEMON',
      pokemon
    }
    expect(actions.loadPokemon(pokemon)).toEqual(expected);
  });
});
