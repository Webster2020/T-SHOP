import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CartOrder.module.scss';

import { Button } from '../../common/Button/Button';
import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';

const Component = () => (
  <Button variant='cartGlass'>
    <Link to={'/confirm'} style={{ textDecoration: 'none' }}>
      <GlassWrapper>
        <div className={styles.cartOrder}>
          <h3>Order</h3>
        </div>
      </GlassWrapper>
    </Link>
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
