import React from 'react';
import { shallow } from 'enzyme';
import { ContainerComponent } from './Container';

describe('Component Container', () => {
  it('should render without crashing', () => {
    const component = shallow(<ContainerComponent />);
    expect(component).toBeTruthy();
  });
});
