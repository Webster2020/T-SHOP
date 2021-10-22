import React from 'react';
import { shallow } from 'enzyme';
import { TestComponent } from './Test';

describe('Component Test', () => {
  it('should render without crashing', () => {
    const component = shallow(<TestComponent />);
    expect(component).toBeTruthy();
  });
});
