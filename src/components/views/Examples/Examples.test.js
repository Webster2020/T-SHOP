import React from 'react';
import { shallow } from 'enzyme';
import { ExamplesComponent } from './Examples';

describe('Component Examples', () => {
  it('should render without crashing', () => {
    const component = shallow(<ExamplesComponent />);
    expect(component).toBeTruthy();
  });
});
