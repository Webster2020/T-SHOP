import React from 'react';
import { shallow } from 'enzyme';
import { CreateComponent } from './Create';

describe('Component Create', () => {
  it('should render without crashing', () => {
    const component = shallow(<CreateComponent />);
    expect(component).toBeTruthy();
  });
});
