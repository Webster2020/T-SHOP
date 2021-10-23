import React from 'react';
import { shallow } from 'enzyme';
import { BreakComponent } from './Break';

describe('Component Break', () => {
  it('should render without crashing', () => {
    const component = shallow(<BreakComponent />);
    expect(component).toBeTruthy();
  });
});
