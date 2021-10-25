import React from 'react';
// import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

// import styles from './Cart.module.scss';

import { CartHeader } from '../../features/CartHeader/CartHeader';
import { CartInfo } from '../../features/CartInfo/CartInfo';
import { CartOrder } from '../../features/CartOrder/CartOrder';
import { CartProductsList } from '../../features/CartProductsList/CartProductsList';
import { CartSummary } from '../../features/CartSummary/CartSummary';
import { Column } from '../../layout/Column/Column';
import { Container } from '../../layout/Container/Container';
import { ProductsList } from '../../features/ProductsList/ProductsList';
import { Row } from '../../layout/Row/Row';
import { Break } from '../../layout/Break/Break';

const Component = () => {

  return (
    <Container variant={'my'}>
      <Row>
        <Column flex={'f6'}>
          <CartHeader text='Cart' />
          <CartProductsList />
          <CartInfo />
        </Column>
        <Column flex={'f6'}>    
          <CartHeader text='Summary' />
          <CartSummary /> 
          <CartOrder />     
        </Column>
      </Row>
      <Break />
      <ProductsList variant='liked'/> 
    </Container>
  );

};

// Component.propTypes = {
//   children: PropTypes.node,
//   variant: PropTypes.string,
//   direction: PropTypes.string,
//   className: PropTypes.string
// };

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Cart,
  // Container as Cart,
  Component as CartComponent,
};
