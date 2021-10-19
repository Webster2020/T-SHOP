import React from 'react';
import { shallow } from 'enzyme';
import { SectionComponent } from './Section';

describe('Component Section', () => {
  it('should render without crashing', () => {
    const component = shallow(<SectionComponent />);
    expect(component).toBeTruthy();
  });
});
