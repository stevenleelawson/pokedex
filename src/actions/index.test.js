import * as actions from './index';

describe('actions', () => {
  it('should call loadPokemonTypes with the right params', () => {
    const pokemonType = [{id: 1, name: 'fighting'}]
    const expected = {
      type: 'LOAD_POKEMON_TYPES',
      pokemonType
    }

    expect(actions.loadPokemonTypes(pokemonType)).toEqual(expected)
  })
});
