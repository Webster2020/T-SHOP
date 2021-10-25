import React from 'react';
import { shallow } from 'enzyme';
import { CartSummaryComponent } from './CartSummary';
import { MemoryRouter } from 'react-router-dom';

describe('Component CartSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><CartSummaryComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
