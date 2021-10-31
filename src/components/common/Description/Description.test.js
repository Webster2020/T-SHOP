import React from 'react';
import { shallow } from 'enzyme';
import { DescriptionComponent } from './Description';

describe('Component Description', () => {
  it('should render without crashing', () => {
    const component = shallow(<DescriptionComponent />);
    expect(component).toBeTruthy();
  });
});
