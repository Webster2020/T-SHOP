import React from 'react';
import { shallow } from 'enzyme';
import { CartProductAmountComponent } from './CartProductAmount';
import { MemoryRouter } from 'react-router-dom';

describe('Component CartProductAmount', () => {
  it('should render without crashing', () => {
    const component = shallow(<MemoryRouter><CartProductAmountComponent /></MemoryRouter>);
    expect(component).toBeTruthy();
  });
});
