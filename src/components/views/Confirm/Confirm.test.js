import React from 'react';
import { shallow } from 'enzyme';
import { ConfirmComponent } from './Confirm';

describe('Component Confirm', () => {
  it('should render without crashing', () => {
    const component = shallow(<ConfirmComponent />);
    expect(component).toBeTruthy();
  });
});
