import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getAll, caSetCartValue } from '../../../redux/cartRedux.js';

import styles from './CartOrder.module.scss';

import { Button } from '../../common/Button/Button';
import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';

const Component = ({productsInCart, setCartValueDispatch}) => {

  const cost = productsInCart.length > 0 ? productsInCart.map(el => el.price * el.amount).reduce((a,b) => a + b) : 0;

  return (
    <Button variant='cartGlass' onClick={() => setCartValueDispatch(cost)}>
      <Link to={`/${productsInCart.length > 0 ? 'confirm' : 'cart'}`} style={{ textDecoration: 'none' }}>
        <GlassWrapper>
          <div className={styles.cartOrder}>
            <h3>{`${productsInCart.length > 0 ? 'Order' : 'Order is impossible!'}`}</h3>
          </div>
        </GlassWrapper>
      </Link>
    </Button>
  );
};

Component.propTypes = {
  productsInCart: PropTypes.array,
  setCartValueDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  productsInCart: getAll(state) || [],
});

const mapDispatchToProps = dispatch => ({
  setCartValueDispatch: cost => dispatch(caSetCartValue(cost)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as CartOrder,
  Component as CartOrderComponent,
};
