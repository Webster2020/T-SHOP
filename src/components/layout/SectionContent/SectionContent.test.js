import React from 'react';
import { shallow } from 'enzyme';
import { SectionContentComponent } from './SectionContent';

describe('Component SectionContent', () => {
  it('should render without crashing', () => {
    const component = shallow(<SectionContentComponent />);
    expect(component).toBeTruthy();
  });
});
