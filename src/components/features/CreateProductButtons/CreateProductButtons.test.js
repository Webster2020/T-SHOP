import React from 'react';
import { shallow } from 'enzyme';
import { CreateProductButtonsComponent } from './CreateProductButtons';
import { MemoryRouter } from 'react-router-dom';

describe('Component CreateProductButtons', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><CreateProductButtonsComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
