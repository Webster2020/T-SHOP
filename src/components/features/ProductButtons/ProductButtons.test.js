import React from 'react';
import { shallow } from 'enzyme';
import { ProductButtonsComponent } from './ProductButtons';
import { MemoryRouter } from 'react-router-dom';

describe('Component ProductButtons', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><ProductButtonsComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
