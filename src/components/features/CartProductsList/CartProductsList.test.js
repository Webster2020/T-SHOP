import React from 'react';
import { shallow } from 'enzyme';
import { CartProductsListComponent } from './CartProductsList';
import { MemoryRouter } from 'react-router-dom';

describe('Component CartProductsList', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><CartProductsListComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
