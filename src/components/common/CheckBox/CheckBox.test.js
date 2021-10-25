import React from 'react';
import { shallow } from 'enzyme';
import { CheckBoxComponent } from './CheckBox';

describe('Component CheckBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<CheckBoxComponent />);
    expect(component).toBeTruthy();
  });
});
