import React from 'react';

import styles from './Cart.module.scss';

import { Break } from '../../layout/Break/Break';
import { CartHeader } from '../../features/CartHeader/CartHeader';
import { CartInfo } from '../../features/CartInfo/CartInfo';
import { CartOrder } from '../../features/CartOrder/CartOrder';
import { CartProductsList } from '../../features/CartProductsList/CartProductsList';
import { CartSummary } from '../../features/CartSummary/CartSummary';
import { Column } from '../../layout/Column/Column';
import { ProductsList } from '../../features/ProductsList/ProductsList';
import { Row } from '../../layout/Row/Row';
import { Wrapper } from '../../layout/Wrapper/Wrapper';

const Component = () => {

  return (
    <Wrapper variant={'my'}>
      <Row className={styles.col}>
        <Column flex={'f6'} className={styles.full}>
          <CartHeader text='Cart' />
          <CartProductsList />
          <CartInfo />
        </Column>
        <Column flex={'f6'} className={styles.full}>    
          <CartHeader text='Summary' />
          <CartSummary /> 
          <CartOrder />     
        </Column>
      </Row>
      <Break />
      <ProductsList variant='liked'/> 
    </Wrapper>
  );

};

export {
  Component as Cart,
  Component as CartComponent,
};
