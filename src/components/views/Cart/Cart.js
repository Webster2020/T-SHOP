import React from 'react';
// import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Cart.module.scss';

import { Row } from '../../layout/Row/Row';
import { Column } from '../../layout/Column/Column';
import { Container } from '../../layout/Container/Container';
import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';
import { Button } from '../../common/Button/Button';
import { CartProduct } from '../../features/CartProduct/CartProduct';
import { CartSummary } from '../../features/CartSummary/CartSummary';
import { CartInfo } from '../../features/CartInfo/CartInfo';

const Component = () => {
  return (
    <Container variant={'my'}>
      <Row>

        <Column flex={'f6'}>
          <GlassWrapper>
            <div className={styles.cartContent}>
              <h1>Cart</h1>
            </div>
          </GlassWrapper>
          <CartProduct />
          <CartInfo />
        </Column>

        <Column flex={'f6'}>    
          <GlassWrapper>
            <div className={styles.cartContent}>
              <h1>Summary</h1>
            </div>
          </GlassWrapper>
          <CartSummary />
          <Button>
            <GlassWrapper>
              <div className={styles.cartContent}>
                <h3>Order</h3>
              </div>
            </GlassWrapper>
          </Button>
        </Column>

      </Row>
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
