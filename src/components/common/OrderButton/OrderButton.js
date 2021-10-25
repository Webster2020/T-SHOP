import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './OrderButton.module.scss';

import { Button } from '../Button/Button';

const Component = ({onClick, text}) => (
  <div className={styles.orderButton}>
    <Link to='/' style={{ textDecoration: 'none' }}>
      <Button variant='glass' width='wdtFull' onClick={(e) => onClick(e)}>
        {text}
      </Button>
    </Link>
  </div>
);

Component.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as OrderButton,
  // Container as OrderButton,
  Component as OrderButtonComponent,
};
