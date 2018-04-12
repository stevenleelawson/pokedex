export const fakeAction = () => ({ type: 'FAKE'})

export const loadPokemonTypes = (pokemonType) => ({
  type: 'LOAD_POKEMON_TYPES',
  pokemonType
})

export const loadPokemon = pokemon => ({
  type: 'LOAD_POKEMON',
  pokemon
})
