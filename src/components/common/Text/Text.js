import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Text.module.scss';

const Component = ({children}) => (
  <div className={styles.textWrapper}>
    <h2 className={styles.text}>
      {children}
    </h2>
  </div>
);

Component.propTypes = {
  children: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Text,
  // Container as Text,
  Component as TextComponent,
};
