import React from 'react';
import { shallow } from 'enzyme';
import { NavbarComponent } from './Navbar';
import { MemoryRouter } from 'react-router-dom';

describe('Component Navbar', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><NavbarComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
