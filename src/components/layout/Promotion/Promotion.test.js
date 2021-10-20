import React from 'react';
import { shallow } from 'enzyme';
import { PromotionComponent } from './Promotion';

describe('Component Promotion', () => {
  it('should render without crashing', () => {
    const component = shallow(<PromotionComponent />);
    expect(component).toBeTruthy();
  });
});
