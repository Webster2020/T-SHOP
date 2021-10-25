import React from 'react';
import { shallow } from 'enzyme';
import { ValidMessageComponent } from './ValidMessage';

describe('Component ValidMessage', () => {
  it('should render without crashing', () => {
    const component = shallow(<ValidMessageComponent />);
    expect(component).toBeTruthy();
  });
});
