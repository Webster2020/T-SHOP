import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getCost } from '../../../redux/cartRedux.js';

import styles from './ConfirmData.module.scss';

const Component = ({cartValue}) => {

  useEffect(() => {
    console.log(cartValue);
  });

  return (
    <div className={styles.root}>
      <h2>ConfirmData</h2>
      {cartValue}
    </div>
  );
};


Component.propTypes = {
  cartValue: PropTypes.func,
};

const mapStateToProps = state => ({
  cartValue: getCost(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as ConfirmData,
  Container as ConfirmData,
  Component as ConfirmDataComponent,
};
