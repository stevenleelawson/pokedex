import React from 'react';
import {App} from './App';
import { shallow } from 'enzyme';

describe('App', () => {

  let wrapper;
  beforeEach(() => {
    let mockTypes = [{id: 1, name: 'normal'}]
    wrapper = shallow(<App types={mockTypes}/>);
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
