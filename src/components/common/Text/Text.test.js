import React from 'react';
import { shallow } from 'enzyme';
import { TextComponent } from './Text';

describe('Component Text', () => {
  it('should render without crashing', () => {
    const component = shallow(<TextComponent />);
    expect(component).toBeTruthy();
  });
});
