import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { caChangeAmount } from '../../../redux/cartRedux.js';

import styles from './CartProductAmount.module.scss';

import { Button } from '../../common/Button/Button';
import { Column } from '../../layout/Column/Column';
import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';

const Component = ({product, changeAmountDispatch}) => {

  const [amount, setAmount] = useState(product.amount);

  const changeAmount = (e, type) => {
    e.preventDefault();
    if (type === 'increase') {
      if (amount < 9) {
        setAmount(amount + 1);
        changeAmountDispatch({
          id: product.id,
          cartID: product.cartID,
          amount: amount + 1,
        });
      }
    }
    if (type === 'decrease') {
      if (amount > 1) {
        setAmount(amount - 1);
        changeAmountDispatch({
          id: product.id,
          cartID: product.cartID,
          amount: amount - 1,
        });
      }
    }
  };

  return (
    <Column className={styles.row}>
      <Button variant='cartGlass' onClick={e => changeAmount(e, 'increase')}>
        <GlassWrapper>
          <div className={styles.buttonAmountContent}>
            <h2>+</h2>
          </div>
        </GlassWrapper>
      </Button>
      <GlassWrapper>
        <div className={styles.buttonAmountContent}>
          <h2>{product.amount}</h2>
        </div>
      </GlassWrapper>
      <Button variant='cartGlass' onClick={e => changeAmount(e, 'decrease')}>
        <GlassWrapper>
          <div className={styles.buttonAmountContent}>
            <h2>-</h2>
          </div>
        </GlassWrapper>
      </Button>
    </Column>
  );
};

Component.propTypes = {
  product: PropTypes.object,
  changeAmountDispatch: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  changeAmountDispatch: data => dispatch(caChangeAmount(data)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  Container as CartProductAmount,
  Component as CartProductAmountComponent,
};
