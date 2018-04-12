import React from 'react';
import { shallow } from 'enzyme';
import PokeCard from './index';

describe('PokeCard', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<PokeCard />)
    expect(wrapper).toMatchSnapshot();
  })
})
