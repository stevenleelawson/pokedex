const loadPokemonTypes = (state=[], action) => {
  switch(action.type) {
    case 'LOAD_POKEMON_TYPES':
      return action.pokemonType;
    default:
      return state;
  }
}

export default loadPokemonTypes;
