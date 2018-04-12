import { combineReducers } from 'redux'
import fakeReducer from './fake-reducer';
import loadPokemonReducer from './loadPokemonReducer';
import loadPokemonTypesReducer from './loadPokemonTypesReducer';

const rootReducer = combineReducers({
  fake: fakeReducer,
  types: loadPokemonTypesReducer,
  pokemon: loadPokemonReducer
})

export default rootReducer
