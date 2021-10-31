import React from 'react';
import { shallow } from 'enzyme';
import { WrapperComponent } from './Wrapper';

describe('Component Wrapper', () => {
  it('should render without crashing', () => {
    const component = shallow(<WrapperComponent />);
    expect(component).toBeTruthy();
  });
});
