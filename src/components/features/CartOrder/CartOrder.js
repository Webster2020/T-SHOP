import React from 'react';
// import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CartOrder.module.scss';

import { Button } from '../../common/Button/Button';
import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';

const Component = () => (
  <Button variant='cartGlass'>
    <GlassWrapper>
      <div className={styles.cartOrder}>
        <h3>Order</h3>
      </div>
    </GlassWrapper>
  </Button>
);

// Component.propTypes = {
// };

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as CartOrder,
  // Container as CartOrder,
  Component as CartOrderComponent,
};
