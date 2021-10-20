import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Bricks.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.bricksWrapper}>
      <div className={`${styles.bricksBrick} ${styles.bricksDark}`}></div>
      <div className={`${styles.bricksBrick} ${styles.bricksWhite}`}></div>
    </div>
    <div className={styles.bricksWrapper}>
      <div className={`${styles.bricksBrick} ${styles.bricksWhite}`}></div>
      <div className={styles.bricksBrick}></div>
      <div className={`${styles.bricksBrick} ${styles.bricksDark}`}></div>
    </div>
    <div className={styles.bricksWrapper}>
      <div className={styles.bricksBrick}></div>
      <div className={`${styles.bricksBrick} ${styles.bricksDark}`}></div>
      <div className={`${styles.bricksBrick} ${styles.bricksWhite}`}></div>
      <div className={styles.bricksBrick}></div>
    </div>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Bricks,
  // Container as Bricks,
  Component as BricksComponent,
};
