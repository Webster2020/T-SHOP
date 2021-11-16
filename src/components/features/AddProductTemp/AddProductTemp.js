import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { caAddProductToDB } from '../../../redux/productRedux.js';

import styles from './AddProductTemp.module.scss';

import { Button } from '../../common/Button/Button.js';

const Component = ({addProductDispatch}) => {

  const addProduct = e => {
    e.preventDefault();
    addProductDispatch({
      colors: {
        main: 'green',
        mainStripe: 'yellow',
        logo: 'transparent',
        sleeveL: 'yellow',
        sleeveR: 'yellow',
        stripeL: 'green',
        stripeR: 'green',
        collarStripe: 'transparent',
      },
      amount: 1,
      description: '',
      like: false,
      price: 50,
      currency: '$',
    });
  };

  return (
    <div className={styles.root}>
      <Button onClick={e => addProduct(e)}>ADD PRODUCT 1</Button>
    </div>
  );
};

Component.propTypes = {
  addProductDispatch: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  addProductDispatch: data => dispatch(caAddProductToDB(data)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  Container as AddProductTemp,
  Component as AddProductTempComponent,
};
