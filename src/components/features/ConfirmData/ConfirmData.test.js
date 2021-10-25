import React from 'react';
import { shallow } from 'enzyme';
import { ConfirmDataComponent } from './ConfirmData';

describe('Component ConfirmData', () => {
  it('should render without crashing', () => {
    const component = shallow(<ConfirmDataComponent />);
    expect(component).toBeTruthy();
  });
});
