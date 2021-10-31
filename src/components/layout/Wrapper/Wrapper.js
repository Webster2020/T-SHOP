import React from 'react';
import PropTypes from 'prop-types';

import styles from './Wrapper.module.scss';

const Component = ({
  className: propClassName, 
  children, 
  variant,
  ...props
}) => {
  const classes = [];

  if (propClassName) classes.push(propClassName);
  if (variant) classes.push(styles[variant]);
  else classes.push(styles.root);

  return (
    <section {...props} className={classes.join(' ')}>
      {children}
    </section>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string,
};

export {
  Component as Wrapper,
  Component as WrapperComponent,
};
