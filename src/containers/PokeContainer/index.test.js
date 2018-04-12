import React from 'react';
import { shallow } from 'enzyme';
import {PokeContainer} from './PokeContainer';

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
