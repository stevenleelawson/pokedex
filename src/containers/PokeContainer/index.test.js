import React from 'react';
import { shallow } from 'enzyme';
import {PokeContainer, mapDispatchToProps, mapStateToProps} from './PokeContainer';
import * as actions from '../../actions';

describe('PokeContainer', () => {
  it('should match the snapshot', () => {
    let mockTypes = [{id: 1, name: 'normal'}];
    const mockPoke = [{
      id: 1,
      name: 'Bulbasaur',
      sprites: {
        front_default: 'taco'

    }
  }];

    const wrapper = shallow(
      <PokeContainer
        types={mockTypes}
        pokemon={mockPoke}
    />)
  });
})

describe('mapDispatchToProps', () => {
  it('should call dispatch with loadPokemon', () => {
    const mockPoke = [{
      id: 1,
      name: 'Bulbasaur',
      sprites: {
        front_default: 'taco'

    }
  }];
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    const expected = actions.loadPokemon(mockPoke);
    mapped.loadPokemon(mockPoke);

    expect(mockDispatch).toHaveBeenCalledWith(expected)
  })
})

describe('mapStateToProps', () => {
  it('should update the state tree with types', () => {
    const mockTypes = {
      types: [{id: 1, name: 'normal'}]
    }

    const actual = mapStateToProps(mockTypes);

    const expected = mockTypes;
    expect(actual).toEqual(expected);
  })

  it('should update the state tree with pokemon', () => {
    const mockPokemon = {
      pokemon: [{id: 17, name: 'Bulbasaur'}]
    }

    const actual = mapStateToProps(mockPokemon);
    const expected = mockPokemon;

    expect(actual).toEqual(expected);
  })
})
