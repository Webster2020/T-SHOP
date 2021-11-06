import React from 'react';
import { shallow } from 'enzyme';
import { TshirtComponent } from './Tshirt';
import { MemoryRouter } from 'react-router-dom';

describe('Component Tshirt', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><TshirtComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
