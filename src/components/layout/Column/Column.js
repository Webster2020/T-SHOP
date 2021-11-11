import React from 'react';
import PropTypes from 'prop-types';

import styles from './Column.module.scss';

const Component = ({
  children,
  size,
  flex,
  direction,
  justify,
  className: propClassName,
  ...props
}) => {
  const classes = [];

  if (propClassName) classes.push(propClassName);
  if (size) classes.push(styles[size]);
  if (flex) classes.push(styles[flex]);
  if (direction) classes.push(styles[direction]);
  if (justify) classes.push(styles[justify]);
  else classes.push(styles.column);

  return (
    <div {...props} className={classes.join(' ')}>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  flex: PropTypes.string,
  direction: PropTypes.string,
  justify: PropTypes.string,
  className: PropTypes.string,
};

export {
  Component as Column,
  Component as ColumnComponent,
};
