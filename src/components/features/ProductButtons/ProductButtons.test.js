import React from 'react';
import { shallow } from 'enzyme';
import { ProductButtonsComponent } from './ProductButtons';

describe('Component ProductButtons', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductButtonsComponent />);
    expect(component).toBeTruthy();
  });
});
