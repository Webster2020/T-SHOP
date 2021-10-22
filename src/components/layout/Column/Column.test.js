import React from 'react';
import { shallow } from 'enzyme';
import { ColumnComponent } from './Column';

describe('Component Column', () => {
  it('should render without crashing', () => {
    const component = shallow(<ColumnComponent />);
    expect(component).toBeTruthy();
  });
});
