import React from 'react';
import { shallow } from 'enzyme';
import { AddProductTempComponent } from './AddProductTemp';

describe('Component AddProductTemp', () => {
  it('should render without crashing', () => {
    const component = shallow(<AddProductTempComponent />);
    expect(component).toBeTruthy();
  });
});
