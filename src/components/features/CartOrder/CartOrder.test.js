import React from 'react';
import { shallow } from 'enzyme';
import { CartOrderComponent } from './CartOrder';
import { MemoryRouter } from 'react-router-dom';

describe('Component CartOrder', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><CartOrderComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
