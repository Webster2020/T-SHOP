import React from 'react';
import { shallow } from 'enzyme';
import { OrderFormComponent } from './ConfirmForm';
import { MemoryRouter } from 'react-router-dom';

describe('Component OrderForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><OrderFormComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
