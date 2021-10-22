import React from 'react';
import { shallow } from 'enzyme';
import { RowComponent } from './Row';

describe('Component Row', () => {
  it('should render without crashing', () => {
    const component = shallow(<RowComponent />);
    expect(component).toBeTruthy();
  });
});
