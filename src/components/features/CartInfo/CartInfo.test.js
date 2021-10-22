import React from 'react';
import { shallow } from 'enzyme';
import { CartInfoComponent } from './CartInfo';

describe('Component CartInfo', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartInfoComponent />);
    expect(component).toBeTruthy();
  });
});
