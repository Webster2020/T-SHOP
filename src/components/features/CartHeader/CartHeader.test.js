import React from 'react';
import { shallow } from 'enzyme';
import { CartHeaderComponent } from './CartHeader';

describe('Component CartHeader', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartHeaderComponent />);
    expect(component).toBeTruthy();
  });
});
