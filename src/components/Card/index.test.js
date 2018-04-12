import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';

describe('Card', () => {
  let wrapper;
  it('should match the snapshot', () => {
    wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });
})
