import React from 'react';
import { shallow } from 'enzyme';
import { GlassWrapperComponent } from './GlassWrapper';

describe('Component GlassWrapper', () => {
  it('should render without crashing', () => {
    const component = shallow(<GlassWrapperComponent />);
    expect(component).toBeTruthy();
  });
});
