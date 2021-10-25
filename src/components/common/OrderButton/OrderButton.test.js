import React from 'react';
import { shallow } from 'enzyme';
import { OrderButtonComponent } from './OrderButton';

describe('Component OrderButton', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderButtonComponent />);
    expect(component).toBeTruthy();
  });
});
