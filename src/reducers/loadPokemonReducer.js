const loadPokemonReducer = (state=[], action) => {
  switch (action.type) {
    case 'LOAD_POKEMON':
      return action.pokemon;
    default:
      return state;
  }
}

export default loadPokemonReducer;
