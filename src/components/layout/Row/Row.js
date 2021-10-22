import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Row.module.scss';

const Component = ({
  children,
  variant,
  direction,
  justify,
  className: propClassName,
  ...props
}) => {
  const classes = [];

  if (propClassName) classes.push(propClassName);
  if (variant) classes.push(styles[variant]);
  if (direction) classes.push(styles[direction]);
  if (justify) classes.push(styles[justify]);
  else classes.push(styles.row);

  return (
    <div {...props} className={classes.join(' ')}>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  direction: PropTypes.string,
  justify: PropTypes.string,
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
  Component as Row,
  // Container as Row,
  Component as RowComponent,
};
