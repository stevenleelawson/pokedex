import React from 'react';
import {App, mapDispatchToProps, mapStateToProps } from './App';
import { shallow } from 'enzyme';
import * as actions from '../../actions';

describe('App', () => {

  let wrapper;
  let mockTypes;
  beforeEach(() => {
    mockTypes = [{id: 1, name: 'normal'}]
    wrapper = shallow(<App types={mockTypes}/>);
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapDispatchToProps', () => {
  it('should call dispatch with loadPokemonTypes', () => {
    const mockTypes = [{id: 1, name: 'normal'}]
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);
    const expected = actions.loadPokemonTypes(mockTypes);
    mapped.loadPokemonTypes(mockTypes);
    expect(mockDispatch).toHaveBeenCalledWith(expected)
  })
})

describe('mapStateToProps', () => {
  it('should update the state with types', () => {
    const mockTypes = {
      types: [{id: 1, name: 'normal'}]
    }
    const actual = mapStateToProps(mockTypes);
    const expected = mockTypes
    expect(actual).toEqual(expected);
  })
})
