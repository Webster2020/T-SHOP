import React from 'react';
import { shallow } from 'enzyme';
import { CreateProductComponent } from './CreateProduct';

describe('Component CreateProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(<CreateProductComponent />);
    expect(component).toBeTruthy();
  });
});
