import React from 'react';
import { shallow } from 'enzyme';
import { CartOrderComponent } from './CartOrder';

describe('Component CartOrder', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartOrderComponent />);
    expect(component).toBeTruthy();
  });
});
