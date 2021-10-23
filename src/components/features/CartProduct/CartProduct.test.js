import React from 'react';
import { shallow } from 'enzyme';
import { CartProductComponent } from './CartProduct';
import { MemoryRouter } from 'react-router-dom';

describe('Component CartProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><CartProductComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
