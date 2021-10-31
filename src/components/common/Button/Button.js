import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Component = ({
  children,
  variant,
  color,
  height,
  width,
  link,
  stable,
  className: propClassName,
  ...props
}) => {
  const classes = [];

  if (propClassName) classes.push(propClassName);
  if (color) classes.push(styles[color]);
  if (height) classes.push(styles[height]);
  if (width) classes.push(styles[width]);
  if (variant) classes.push(styles[variant]);
  else classes.push(styles.default);

  let Comp = 'a';

  if (link) {
    Comp = 'button';
  }

  if (stable) {
    Comp = 'div';
  }

  return (
    <Comp href='#' {...props} className={classes.join(' ')}>
      {children}
    </Comp>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  link: PropTypes.bool,
  stable: PropTypes.bool,
  className: PropTypes.string,
};

export {
  Component as Button,
  Component as ButtonComponent,
};
