import React from 'react';
import { shallow } from 'enzyme';
import { BricksComponent } from './Bricks';

describe('Component Bricks', () => {
  it('should render without crashing', () => {
    const component = shallow(<BricksComponent />);
    expect(component).toBeTruthy();
  });
});
