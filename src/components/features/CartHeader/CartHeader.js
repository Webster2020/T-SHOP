import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CartHeader.module.scss';

import { GlassWrapper } from '../../layout/GlassWrapper/GlassWrapper';

const Component = ({text}) => (
  <GlassWrapper>
    <div className={styles.cartHeader}>
      <h1>{text}</h1>
    </div>
  </GlassWrapper>
);

Component.propTypes = {
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
  Component as CartHeader,
  // Container as CartHeader,
  Component as CartHeaderComponent,
};
