import { combineReducers } from 'redux'
import fakeReducer from './fake-reducer'
import loadPokemonTypesReducer from './loadPokemonTypesReducer';

const rootReducer = combineReducers({
  fake: fakeReducer,
  types: loadPokemonTypesReducer
})

export default rootReducer
