import React from 'react';

import { Header } from '../../layout/Header/Header';
import { ProductsList } from '../../features/ProductsList/ProductsList';
import { Promotion } from '../../layout/Promotion/Promotion';
import { Wrapper } from '../../layout/Wrapper/Wrapper';

const Component = () => (
  <div>
    <Header />
    <Wrapper>
      <ProductsList variant='top'/>
    </Wrapper>
    <Promotion variant='promo'/>
    <Wrapper>
      <ProductsList variant='all'/>
    </Wrapper>
    <Promotion variant='benefits'/>
  </div>
);

export {
  Component as Home,
  Component as HomeComponent,
};
