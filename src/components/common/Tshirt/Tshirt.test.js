import React from 'react';
import { shallow } from 'enzyme';
import { TshirtComponent } from './Tshirt';

describe('Component Tshirt', () => {
  it('should render without crashing', () => {
    const component = shallow(<TshirtComponent />);
    expect(component).toBeTruthy();
  });
});
